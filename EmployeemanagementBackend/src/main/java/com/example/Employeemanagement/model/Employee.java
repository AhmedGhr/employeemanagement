package com.example.Employeemanagement.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
@Entity
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false ,updatable = false)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String title;
    private String phone;
    private String imgURL;
    @Column(updatable = false , nullable = false)
    private String employeeCode;
    private String entryHour;
    private String outHour;


    public Employee() {

    }

    public Employee(Long id, String name, String email, String password,String title, String phone, String imgURL, String employeeCode, String entryHour, String outHour) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.title = title;
        this.phone = phone;
        this.imgURL = imgURL;
        this.employeeCode = employeeCode;
        this.entryHour = entryHour;
        this.outHour = outHour;
        this.password=password;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    public String getEntryHour() {
        return entryHour;
    }

    public void setEntryHour(String entryHour) {
        this.entryHour = entryHour;
    }

    public String getOutHour() {
        return outHour;
    }

    public void setOutHour(String outHour) {
        this.outHour = outHour;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", title='" + title + '\'' +
                ", phone='" + phone + '\'' +
                ", imgURL='" + imgURL + '\'' +
                ", employeeCode='" + employeeCode + '\'' +
                ", entryHour='" + entryHour + '\'' +
                ", outHour='" + outHour + '\'' +
                '}';
    }
}
