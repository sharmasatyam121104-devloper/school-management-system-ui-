'use client'
import React, { useState } from 'react'
import TeacherRegisterPage from './RegisterTeacher'
import TeacherBasicInfoPage from './BasicInfoTeacher'
import TeacherAcademicInfoPage from './AcademicInfo'
import TeacherPersonalInfoPage from './PersonalInfo'
import TeacherSalaryDocsPage from './SalaryAndDocs'

const CreateTeacher = () => {
  const [step, setStep] = useState<number>(1)

  
  return (
    <>
      {step === 1 && <TeacherRegisterPage setStep={setStep} />}
      {step === 2 && <TeacherBasicInfoPage setStep={setStep} />}
      {step === 3 && <TeacherAcademicInfoPage setStep={setStep} />}
      {step === 4 && <TeacherPersonalInfoPage setStep={setStep} />}
      {step === 5 && <TeacherSalaryDocsPage setStep={setStep} />}
    </>
  )
}

export default CreateTeacher
