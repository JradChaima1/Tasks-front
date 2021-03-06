import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import{ ActivatedRoute,Params} from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  lists!: List[];
  tasks!: Task[];
  constructor(private taskService: TaskService, private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {

        console.log(params);


        }
    )

    this.taskService.getLists().subscribe((lists:List[]) => {
      this.lists = lists;
    })

  }


}
