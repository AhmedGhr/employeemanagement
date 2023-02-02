package com.example.Employeemanagement.service;

import com.example.Employeemanagement.exception.UserNotFoundException;
import com.example.Employeemanagement.model.Employee;
import com.example.Employeemanagement.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;


@Transactional
@Service
public class EmployeeService {

    private final EmployeeRepo employeeRepo ;
    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees(){
        return employeeRepo.findAll();
    }
    public Employee findEmployeeByID(Long id){
        return employeeRepo.findEmployeeById(id).orElseThrow(()-> new UserNotFoundException("User by id "+id +"no found in db"));
    }
    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public void deleteEmployeeById(Long id){
        employeeRepo.deleteEmployeeById(id);
    }

    public Employee findEmployeeByEmailAndPassword(String email , String password){
        return employeeRepo.findByEmailAndAndPassword(email,password).orElseThrow(()-> new UserNotFoundException("User by email "+email +" " +"no found in db"));
    }


}
