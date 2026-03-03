"use client";

import React from "react";
import { Card, Result, Button } from "antd";
import { useRouter } from "next/navigation";

type Props = {
  message: string;
};

const TeacherStatusMessage: React.FC<Props> = ({ message }) => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-md">
        <Result
          status="info"
          title={message}
          extra={[
            <Button
              type="primary"
              key="go"
              onClick={() => router.replace("/admin/teacher")}
            >
              Go to Create Teacher
            </Button>,
          ]}
        />
      </Card>
    </div>
  );
};

export default TeacherStatusMessage;