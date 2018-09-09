import { Component, OnInit } from "@angular/core";
import { TestService } from "../test.service";

@Component({
  selector: "app-oppo-sentiment-table",
  templateUrl: "./oppo-sentiment-table.component.html",
  styleUrls: ["./oppo-sentiment-table.component.scss"]
})
export class OppoSentimentTableComponent implements OnInit {
  show = false;
  text = "";
  foods = [
    { value: "1day", viewValue: "1day" },
    { value: "3days", viewValue: "3days" },
    { value: "7days", viewValue: "7days" },
    { value: "30days", viewValue: "30days" }
  ];
  selected = "7days";
  pos = [
    {
      created_at: { $date: 1528576994000 },
      name: "Zane Rider",
      sentiment: "pos",
      text:
        "ชอบ pepsi max ที่สุด หวานซ่ากำลังดี กลิ่นโคล่าแบบสดชื่นๆ  รองมาก็ coke light ดื่มแล้วรู้สึกเบาๆ ลื่นๆคอเหมือนชื่อเลย ดื่มแล้วไม่รู้สึกมีอะไรติดลิ้นติดคอเลย สดชื่นแบบเคลียร์ๆ"
    },
    {
      created_at: { $date: 1528576994000 },
      name: "vn, man",
      sentiment: "pos",
      text: "Pepsi max อร่อยกว่า"
    },
    {
      created_at: { $date: 1528576994000 },
      name: "คนไม่รู้ ",
      sentiment: "pos",
      text: "ถ้าเป็นออริจินัล ชอบเป๊ปซี่มากกว่าโค้ก"
    }
  ];
  neg=[
    {
      created_at:{$date: 1528576994000},
      name:"underground1",
      sentiment:"neg",
      text:"ผมชอบ PEPSI MAX ที่สุดแล้ว รสชาติดีกว่า Pepsi ธรรมดา แต่มีข้อเสียอย่างนึงที่เจอกับตัวเองคือ กินเวลาท้องว่างไม่ได้ มันจะทำให้หิวมาก หิวจนมือสั่นเลยยคับ ต้องหาอะไรกิน"
      },
      {
      created_at:{$date: 1528576994000},
      name:"มาดิน",
      sentiment:"neg",
      text:"pepsi หวานไปหน่อย"
      },
      {
      created_at:{$date: 1528576994000},
      name:"morirun_mamon",
      sentiment:"neg",
      text:"Pepsi ตั้งแต่หลุดจากเสริมสุข รสชาติเพี้ยนแบบรู้สึกได้เลย เลยหันไปหาโค้กแทนละ"
      }
  ];
  temp: any;
  constructor(private testService: TestService) {}

  ngOnInit() {
    this.changeDate(" 7days ");
  }
  changeDate(date) {
    // this.testService.getSentimentText(date).subscribe(res => {
    //   this.temp = res;
    //   this.pos = this.temp["pos"];
    //   this.neg = this.temp["neg"];
    // });
  }
  showAll(text) {
    this.text = text;
    this.show = !this.show;
  }
}
