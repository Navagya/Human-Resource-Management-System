import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import DepartmentList from "../components/DepartmentList";
import AddDepartmentForm from "../components/AddDepartmentForm";

function DepartmentPage() {
    const [departments, setDepartments] = useState([]);

    //fetch all departments from backend

    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        const res = await axios.get("http://localhost:5000/api/departments");
        setDepartments(res.data);
    };

    const addDepartment = async (name, description) => {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.post(
                "http://localhost:5000/api/departments",
                { name, description },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setDepartments([...departments, res.data]);
        } catch (err) {
            console.error("Error adding department:", err);
        }

    };

    const deleteDepartment = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await axios.delete(`http://localhost:5000/api/departments/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setDepartments(departments.filter((d) => d._id !== id));
        } catch (err) {
            console.error("Error deleting department:", err);
        }

    };

    return (
        <Layout>
            <h2 className="text-2xl font-semibold mb-4">Department Management</h2>

            <AddDepartmentForm onAdd={addDepartment} />

            <DepartmentList
                departments={departments}
                onDelete={deleteDepartment}
            />
        </Layout>
    );
}

export default DepartmentPage;

