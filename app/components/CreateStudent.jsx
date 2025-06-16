'use client'
import { useState } from "react";
import { createStudent } from "../lib/Students";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Label from "./ui/Label";
const StudentForm = () => {
  const router = useRouter();
const [form, setForm] = useState( {
  firstName: '',
  middleName: '',
  lastName:'',
  email: '',
  contact: '',
  studentaddress: {
    nationality: '',
    district: '',
    town: '',
    village: '',
  },
  parentDetails: {
    firstName: '',
    middleName: '',
    lastName:'',
    dob: '2003-02-09',
    grade: '',
    email: '',
    contact: '',
    parentAddress: {
      relationship: '',
      nationality: '',
      district: '',
      town: '',
      village: '',
  },
  }
});

const grades = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', ]
const relationships = [
  "Father",
  "Mother",
  "Guardian",
  "Stepfather",
  "Stepmother",
  "Grandfather",
  "Grandmother",
  "Brother",
  "Sister",
  "Half-Brother",
  "Half-Sister",
  "Stepbrother",
  "Stepsister",
  "Uncle",
  "Aunt",
  "Nephew",
  "Cousin",

  "Foster Father",
  "Foster Mother",
  "Adoptive Father",
  "Adoptive Mother",
];


const handleCreate = async () => {
  const studentWithID = {...form, id: uuidv4()};
  await createStudent(studentWithID);
}

const handleChange = (e) => {
  const { name, value } = e.target;
  if (name.includes('.')) {
    const [parent, child] = name.split('.');
    setForm(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [child]: value
      }
    }));
  } else {
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  handleCreate();
  console.log(form)
  setForm({
    firstName: '',
    middleName: '',
    lastName:'',
    email: '',
    phonenumber: '',
    grade: '',
    gender: '',
    dob: '',
    studentaddress: {
      nationality: '',
      district: '',
      town: '',
      village: '',
    },
    parentDetails: {
      firstName: '',
      middleName: '',
      relationship: '',
      lastName:'',
      email: '',
      contact: '',
      parentAddress: {
        nationality: '',
        district: '',
        town: '',
        village: '',
  },
  }
  });

  router.push('/students');
}

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="studentform shadow-lg p-10 rounded-lg bg-white">
        <h2 className="border-b-2 py-2 font-medium text-xl text-gray-800">Student Details</h2>
        <div>
          <Label type={'text'} name={'firstName'} value={form.firstName} handleChange={handleChange} placeholder={'Enter First name'} labelName={'First Name'} />
          <Label type={'text'} name={'middleName'} value={form.middleName} handleChange={handleChange} placeholder={'Optional'} labelName={'Middle Name(Optional)'} />
          <Label type={'text'} name={'lastName'} value={form.lastName} handleChange={handleChange} placeholder={'Enter Last Name'} labelName={'Last Name'}/>
        </div>
        <div>
          <Label type={'date'} name={'dob'} value={form.dob} handleChange={handleChange} placeholder={'Date of Birth'} labelName={'Date Of Birth'} />
          <Label type={'email'} name={'email'} value={form.email} handleChange={handleChange} placeholder={'you@gmail.com'} labelName={'Email'} />
          <Label type={'text'} name={'contact'} value={form.contact} handleChange={handleChange} placeholder={'+256700000001'} labelName={'Phone number '}/>
        </div>

          <div className="">
            <Label type={'text'} name={'studentaddress.nationality'} value={form.studentaddress.nationality} handleChange={handleChange} placeholder={'Ugandan'} labelName={'Nationality'} />
            <Label type={'text'} name={'studentaddress.district'} value={form.studentaddress.district} handleChange={handleChange} placeholder={'Mukono'} labelName={'District'} />
            <Label type={'text'} name={'studentaddress.town'} value={form.studentaddress.town} handleChange={handleChange} placeholder={'Seeta'} labelName={'Town'} />
            <Label type={'text'} name={'studentaddress.village'} value={form.studentaddress.village} handleChange={handleChange} placeholder={'Village'} labelName={'Town'} />
          <label htmlFor="">
            <span>Grade</span>
            <select name="grade" id="grade" value={form.grade} onChange={handleChange}>
            {grades.map((grade) => (
              <option value={grade} >{grade}</option>
            ))}
          </select>
          </label>
          <label htmlFor="">
            <span>Gender</span>
            <select name="gender" id="gender" value={form.gender} onChange={handleChange}>
              <option value={'Male'}>Male</option>
              <option value={'Female'}>Female</option>
            </select>
          </label>
        </div>

        <h3 className="font-medium text-xl pt-10 pb-5">Parent Details</h3>
        <div>
          <Label type={'text'} name='parentDetails.firstName' value={form.parentDetails.firstname} handleChange={handleChange} placeholder={'Mana'} labelName={'First Name'} />
          <Label type={'text'} name={'parentDetails.middleName'} value={form.parentDetails.middleName} handleChange={handleChange} placeholder={'Optional'} labelName={'Middle Name(Optional)'} />
          <Label type={'text'} name={'parentDetails.lastName'} value={form.parentDetails.lastName} handleChange={handleChange} placeholder={'Wick'} labelName={'Last Name'}/>
        </div>
        <div>
          <label htmlFor="">
            <span>Relationship</span>
          <select name="parentDetails.relationship" id="relationship" value={form.parentDetails.relationship} onChange={handleChange}>
            {relationships.map((relation) => (
              <option key={relation} value={relation}>{relation}</option>
            ))}
          </select>
          </label>

          <Label type={'email'} name={'parentDetails.email'} value={form.parentDetails.email} handleChange={handleChange} placeholder={'you@gmail.com'} labelName={'Email'} />
          <Label type={'text'} name={'parentDetails.contact'} value={form.parentDetails.contact} handleChange={handleChange} placeholder={'+2567000000000'} labelName={'Phone number'}/>

            <Label type={'text'} name={'parentDetails.parentAddress.nationality'} value={form.parentDetails.parentAddress.nationality} handleChange={handleChange} placeholder={'Ugandan'} labelName={'Nationality'} />
            <Label type={'text'} name={'parentDetails.parentAddress.district'} value={form.parentDetails.parentAddress.district} handleChange={handleChange} placeholder={'Mukono'} labelName={'District'} />
            <Label type={'text'} name={'parentDetails.parentAddress.town'} value={form.parentDetails.parentAddress.town} handleChange={handleChange} placeholder={'Seeta'} labelName={'Town'} />
            <Label type={'text'} name={'parentDetails.parentAddress.village'} value={form.parentDetails.parentAddress.village} handleChange={handleChange} placeholder={'Village'} labelName={'Town'} />
        </div>
        <button type="submit" className="mt-10 lg:w-3/6 mx-auto">Add Student</button>
      </form>
    </>
  );
};

export default StudentForm;