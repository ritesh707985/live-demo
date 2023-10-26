import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }
baseUrl = "https://dummyjson.com/auth/login"
productUrl ="https://dummyjson.com/products?limit=10&skip=10&select=title,price"
  loginUser(data:any){
    return this.http.post(this.baseUrl,data)
  }

  getproduct(){
    return this.http.get(this.productUrl)
  }
}

