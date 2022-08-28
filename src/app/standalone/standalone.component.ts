import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

type ResponseFakeApi = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './standalone.component.html',
})
export class StandaloneComponent implements OnInit {

  private http = inject(HttpClient);

  public response: ResponseFakeApi[] = [];

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/todos")
      .subscribe(
        (data: ResponseFakeApi[] | any) => this.response = data
      );
  }

}
