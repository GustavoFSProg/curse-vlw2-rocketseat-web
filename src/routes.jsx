import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherList from './pages/TeachersList'
import TeachersForm from './pages/TeachersForm'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeachersForm} />
    </BrowserRouter>
  )
}
