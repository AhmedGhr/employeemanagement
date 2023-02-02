package com.example.Employeemanagement.repo;

import com.example.Employeemanagement.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface EmployeeRepo extends JpaRepository <Employee,Long>{


    void deleteEmployeeById(@Param("id") Long id);
    Optional <Employee> findByEmailAndAndPassword(String email , String password);
    Optional<Employee> findEmployeeByEmail(String email);
    Optional<Employee> findEmployeeById(Long id);
}
