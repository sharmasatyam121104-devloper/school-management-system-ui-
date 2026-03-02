'use client'
import React, { useState } from 'react'
import TeacherRegisterPage from './RegisterTeacher'
import TeacherPersonalInfoPage from './PersonalInfo'
import { Button, Card, Input, Spin } from 'antd'
import clientErrorHandler from '@/lib/clientErrorHandler'
import api from '@/lib/axios'
import TeacherProfessionalInfo from './ProfessionalInfo'
import FinanceInfo from './FinanceInfo'

const CreateTeacher = () => {

  const [step, setStep] = useState<number>(0)
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

const checkStatusOfRegistration = async () => {
  try {
    setLoading(true);

    const { data } = await api.post("/teacher/status-of-registration", {
      email: email.trim(),
    });

    const status = data.status;

    if (status === "Not registerd") {
      setStep(1);
    } 
    else if (status === "ACCOUNT") {
      setStep(2);
    } 
    else if (status === "PROFESSIONAL") {
      setStep(3);
    } 
    else if (status === "PERSONAL") {
      setStep(4);
    } 
    else if (status === "FINANCE") {
      setStep(5);
    } 
    else if (status === "COMPLETED") {
      setStep(6);
    }

  } catch (error) {
    clientErrorHandler(error);
  } finally {
    setLoading(false);
  }
};
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      {step === 0 && (
        <Card title="Enter Teacher Email" className="w-full max-w-md">
          <Input
            placeholder="Enter email"
            size="large"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            type="primary"
            block
            className="mt-4"
            onClick={checkStatusOfRegistration}
            disabled={loading}
          >
            {loading ? <Spin /> : "Continue"}
          </Button>
        </Card>
      )}

      {step === 1 && <TeacherRegisterPage setStep={setStep} email={email}  />}
      {step === 2  && <TeacherProfessionalInfo setStep={setStep} email={email} />}
      {step === 3 && <TeacherPersonalInfoPage setStep={setStep} email={email}/>}
      {step === 4 && <FinanceInfo setStep={setStep} email={email}/>}
    </div>
  )
}

export default CreateTeacher
