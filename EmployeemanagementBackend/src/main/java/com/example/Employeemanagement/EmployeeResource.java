package com.example.Employeemanagement;

import com.example.Employeemanagement.model.Employee;
import com.example.Employeemanagement.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/employee")
public class EmployeeResource {
    private  final EmployeeService employeeService;

    public EmployeeResource(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        List<Employee> employees =employeeService.findAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable("id") Long id){
        Employee employees =employeeService.findEmployeeByID(id);
        return new ResponseEntity<>(employees, HttpStatus.OK);

    }

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee)  {


        Employee newEmployee = employeeService.addEmployee(employee);
         return new ResponseEntity<>(newEmployee,HttpStatus.CREATED);
    }



    @PostMapping("/login")
    public ResponseEntity<Employee> login(@RequestBody Employee employee)  {
        Employee OAuthemployee = this.employeeService.findEmployeeByEmailAndPassword(employee.getEmail(),employee.getPassword());
        return new ResponseEntity<>(OAuthemployee, HttpStatus.OK);


    }

    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){
        Employee updateEmployee = employeeService.updateEmployee(employee);
        return new ResponseEntity<>(updateEmployee,HttpStatus.CREATED);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployeeById(@PathVariable("id") Long id){
        employeeService.deleteEmployeeById(id);;
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
