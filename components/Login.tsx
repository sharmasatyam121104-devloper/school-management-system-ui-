'use client'

import {Button, Form, Input} from 'antd'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Link from 'next/link'

interface ValueInterfce {
    email: string
    password: string
}

const Login = () => {
    const handleLogin = async(value: ValueInterfce)=>{
        console.log(value);
    }

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4 bg-gray-300">
        <Card className="w-90 h-fit ">
            <CardHeader>
                <CardTitle>Login Now</CardTitle>
                <CardDescription>Please Login for continue services!</CardDescription>
            </CardHeader>
            <CardContent>
                <Form
                    layout="vertical"
                    onFinish={handleLogin}
                    >

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
            <CardDescription>
                {/* Bottom Text */}
                <p style={{ textAlign: "center" }}>
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" style={{ color: "#1677ff" }}>
                    Sign up
                    </Link>
                </p>
            </CardDescription>
        </Card>
    </div>
  )
}

export default Login