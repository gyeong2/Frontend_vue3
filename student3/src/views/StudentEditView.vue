<template>
    <div id="StudentEdit">
      <h1>학생 {{ student.id > 0 ? "수정" : "등록" }}</h1>
      <div>
        <input type="text" v-model="student.studentNo" />
      </div>
      <div>
        <input type="text" v-model="student.name" />
      </div>
      <div>
        <input type="phone" v-model="student.phone" />
      </div>
      <div>
        <label><input type="radio" value="남" v-model="student.sex" /> 남자</label>
        <label><input type="radio" value="여" v-model="student.sex" /> 여자</label>
      </div>
      <div>
        <input type="email" v-model="student.email" />
      </div>
      <div>
        <select v-model="student.departmentId">
          <option value="0">학과를 선택하세요</option>
          <option v-for="dpt in departments" :value="dpt.id" :key="dpt.id">
            {{ dpt.name }}
          </option>
        </select>
      </div>
      <div>
        <button type="button" @click="save">저장</button>
        <button type="button" @click="remove" :v-show="student.id > 0">삭제</button>
        <button type="button" @click="goList">취소</button>
      </div>
    </div>
  </template>
  
  <script>
  import { loadStudent, updateStudent, insertStudent, deleteStudent, loadDepartments } 
          from '../studentService';
  
  export default {
    name: "StudentEditView",
    data() {
      return {
        student: { },
        departments: [ ]
      }
    },
    async mounted() {
      const id = this.$route.params.id;
      this.departments = await loadDepartments();
      if (id > 0)
        this.student = await loadStudent(id);
      else
        this.student = {id:0, studentNo:'', name:'', phone:'', email:'', sex:'', departmentId:0 };
    },
    methods: {
      async save() {
        if (this.student.id > 0)
          await updateStudent(this.student);
        else 
          await insertStudent(this.student);
        this.goList();
      },
      goList() {
        this.$router.push("/");
      },
      async remove() {
        if (confirm("삭제하시겠습니까?")) {
          await deleteStudent(this.student.id);
          this.goList();
        }
      }
    }
  }
  </script>
  
  <style>
  input[type=text], input[type=phone], input[type=email] { padding: 6px; width: 200px; }
  select { padding: 6px; width: 150px }
  div { margin-bottom: 15px; }
  label { margin-right: 15px; }
  button { padding: 5px 20px; margin-right: 10px; }
  </style>
  
  