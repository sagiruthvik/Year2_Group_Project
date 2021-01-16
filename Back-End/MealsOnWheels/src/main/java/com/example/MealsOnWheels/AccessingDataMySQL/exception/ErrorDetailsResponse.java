package com.example.MealsOnWheels.AccessingDataMySQL.exception;

import org.springframework.http.HttpStatus;

import java.util.Date;

public class ErrorDetailsResponse {
    private Date timeStamp;
    private HttpStatus httpStatus;
    private String message;
    private String path;

    public ErrorDetailsResponse(Date timeStamp, HttpStatus httpStatus, String path, String message) {
        this.timeStamp = timeStamp;
        this.httpStatus = httpStatus;
        this.path = path;
        this.message = message;
    }

    public Date getTimeStamp() {
        return timeStamp;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public String getPath() {
        return path;
    }

    public String getMessage() {
        return message;
    }
}
