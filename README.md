<h1 id='top' style="font-size:500px;">:money_with_wings: Final_K8s_65130496 :money_with_wings:</h1>

This project repository contains the necessary configurations for deploying a web application using Kubernetes and Docker within the Azure cloud environment. Below you'll find detailed explanations of each component included in this repository.

<h1 id='top' style="font-size:500px;"> Web Application Details </h1>
The web application serves as a personal academic platform and includes:

- <h2> Root Endpoint ("/"): </h2> Displays name, ID, a photo, and links to detailed pages such as "My Research" and "My Research Plan".
- <h2> My Research Page ("/myresearch"):</h2> Provides detailed information about ongoing research projects.

   - link ของ Github ที่เก็บ Repository : https://github.com/jinnygym/Final_K8s_65130496
   - Code ของ Web ที่เขียนขึ้น : "/" แสดงชื่อ เลขที่ รูป ลิ้งชื่อ My Research ที่เปิดหน้า "/myresearch"  และลิ้ง "My Research Plan"

- <h2> YAML ไฟล์ของ Dockerfile ที่ใช้สร้างต่างๆ </h2>
   
   - Dockerfile ที่รวมอยู่ในที่เก็บนี้ระบุสภาพแวดล้อมและความต้องการที่จำเป็นในการรันแอปพลิเคชันภายในคอนเทนเนอร์ Docker 

- <h2> YAML ไฟล์ของ K8s ที่ใช้ deployment, volume และ Service </h2>
   
   - ขั้นตอนการสร้าง K8 ที่แสดงรายละเอียดการดำเนินการให้ครบถ้วน
- <h2> การกำหนดค่าบริการ Kubernetes : ไฟล์: service.yaml </h2>
   - วัตถุประสงค์: ไฟล์นี้กำหนดบริการ Kubernetes ที่ช่วยให้สามารถจัดการการเข้าถึงเน็ตเวิร์กไปยัง pods ของแอปพลิเคชันตามตัวเลือกและป้ายกำกับที่กำหนด <br>
   - ประเภท: LoadBalancer เพื่อกระจายการเข้าถึงเครือข่ายที่เข้ามา <br>
   - 80: พอร์ตการเข้าถึงภายนอก (HTTP) <br>
   - TargetPort 8080: พอร์ตแอปพลิเคชันภายใน <br>
   - ลิ้งค์ของ บริการที่สร้างขึ้น โดยเปิดไว้ ถึง วันที่ 20 พฤษภาคม เวลา 23.00 Service URL: http://4.145.182.156/ 
