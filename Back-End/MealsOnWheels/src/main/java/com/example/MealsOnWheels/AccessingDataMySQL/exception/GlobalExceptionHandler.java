package com.example.MealsOnWheels.AccessingDataMySQL.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Object> handleResourceNotFound(ResourceNotFoundException e, WebRequest request) {
        ErrorDetailsResponse errorDetailsResponse = new ErrorDetailsResponse(new Date(), HttpStatus.NOT_FOUND, request.getDescription(false), e.getMessage());
        return new ResponseEntity<>(errorDetailsResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleGlobalExceptions(Exception e, WebRequest request) throws Throwable {
        ErrorDetailsResponse errorDetailsResponse = new ErrorDetailsResponse(new Date(), HttpStatus.BAD_REQUEST, request.getDescription(false), e.getMessage());
        return new ResponseEntity<>(errorDetailsResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}