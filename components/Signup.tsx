'use client'

import {Button, Form, Input} from 'antd'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Link from 'next/link'

interface ValueInterfce {
    name: string
    email: string
    phone: string
    password: string
}

const Signup = () => {

    const handleSignup = async(value: ValueInterfce)=>{
        console.log(value);
    }

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4 bg-gray-300">
        <Card className="w-90 h-fit ">
            <CardHeader>
                <CardTitle>Signup Now</CardTitle>
                <CardDescription>Please signup for continue services!</CardDescription>
            </CardHeader>
            <CardContent>
                <Form
                    layout="vertical"
                    onFinish={handleSignup}
                    >

                    {/* Name */}
                    <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                        { required: true, message: "Please enter your name" },
                        { min: 2, message: "Name must be at least 2 characters" },
                    ]}
                    >
                        <Input placeholder="Enter full name" size='large'/>
                    </Form.Item>

                    {/* Email */}
                    <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Enter a valid email" },
                    ]}
                    >
                    <Input placeholder="Enter email" size='large'/>
                    </Form.Item>

                    {/* Phone */}
                    <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                        { required: true, message: "Please enter phone number" },
                        {
                        pattern: /^[0-9]{10}$/,
                        message: "Enter valid 10 digit phone number",
                        },
                    ]}
                    >
                    <Input placeholder="Enter phone number" size='large'/>
                    </Form.Item>

                    {/* Password */}
                    <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: "Please enter password" },
                        { min: 6, message: "Password must be at least 6 characters" },
                    ]}
                    >
                    <Input.Password placeholder="Enter password" size='large'/>
                    </Form.Item>

                    <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Sign Up
                    </Button>
                    </Form.Item>
                </Form>
            </CardContent>
             {/* Bottom Text */}
                <p style={{ textAlign: "center" }}>
                    Already have an account?{" "}
                    <Link href="/login" style={{ color: "#1677ff" }}>
                    Login
                    </Link>
                </p>
        </Card>
    </div>
  )
}

export default Signup