const express = require("express");
const app = express();

// Serve static files from the "styles" directory
app.use('/styles', express.static('styles'));

// Home route
app.get("/", (req, res) => {
  res.send(`
      <img src="https://media.discordapp.net/attachments/1218818244404576346/1241674356971802696/FTC_1246_K.jpg?ex=664b0edb&is=6649bd5b&hm=286b845f2968939da713d6bbf9dd7add9fd0fbfccee77625d16d2e17c1b48724&=&format=webp&width=479&height=662" alt="รูปภาพ">
      <p>id: 65130496</p>
      <p>Suphitsara Cheevanantaporn</p>
      <a href="/myresearch">My Research</a>
      <a href="/researchplan">My Research Plan</a>
      <a href="/rest/researchplan/">Rest My Research Plan</a>
  `);
});

// My Research route
app.get("/myresearch", (req, res) => {
  res.send(`
      <p>Rhythmic Gymnastics Pose Accuracy Evaluation System Using YOLOv7 <br>
      This research was conducted to study and develop an accuracy assessment system for rhythmic gymnastics poses using YOLOv7 technology. 
      Originating from the observation that injuries in rhythmic gymnastics are diverse and significantly impact athletes' health and training routines, 
      this research emphasizes the crucial role of maintaining correct postures to mitigate injury risks. By introducing YOLOv7-Pose technology for precise posture evaluation, 
      this study aims to reduce the probability of injuries and support the development of proper and safe movement skills during exercise and training sessions.
      
      <br>The identified problem led to the development of a detection model capable of identifying inaccuracies in athletes' poses through advanced technology. 
      This model aims to reduce injury risks, assist athletes in enhancing their performance, and contribute to better competition outcomes.
      <br>Experimental investigations into creating a model for facial and body detection of Rhythmic gymnastics poses using YOLOv7 demonstrated that the developed 
      system could accurately assess the correctness of poses, fulfilling the research objectives. Moreover, the system provides recommendations for posture improvements, 
      helping athletes achieve better health and decrease the likelihood of future injuries.
      <br>Keywords: Rhythmic Gymnastics, Pose Estimation, YOLOv7
      </p>

      <a href="/">MyHome</a>
  `);
});

// Research Plan route
app.get("/researchplan", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" type="text/css" href="/styles/style.css">
    </head>
    <body>
      <p>Rhythmic Gymnastics Pose Accuracy Evaluation System Using YOLOv7 <br></p>
      <table>
      <caption>
        My Research Plan
      </caption>
      <tr>
        <th scope="col">การดำเนินงาน</th>
        <th scope="col">เดือน</th>
        <th scope="col">Status</th>
      </tr>
      <tr>
        <th scope="row">1. เสนอหัวข้อและขอบเขตสารนิพนธ์</th>
        <td>พ.ย.-ธ.ค.66</td>
        <td>Done</td>
      </tr>
      <tr>
        <th scope="row">2. ศึกษาปัญหา ทฤษฎีที่เกี่ยวข้องและความต้องการของระบบ</th>
        <td>ต.ค.-พ.ย. 66</td>
        <td>Done</td>
      </tr>
      <tr>
        <th scope="row">3. ศึกษาและทดลองวิธีการใช้งานโมเดล YOLOv7ระบบตรวจจับใบหน้าบุคคล และตรวจจับร่างกาย
ผ่านอุปกรณ์ที่ใช้ในระบบ	</th>
        <td>ม.ค.-ก.พ. 67</td>
        <td>Done</td>
      </tr>
  		<tr>
        <th scope="row">4. วิเคราะห์ออกแบบระบบและพัฒนา  
Software ตามความต้องการของระบบ </th>
        <td>มี.ค.-เม.ย. 67</td>
        <td>Done</td>
      </tr>
  <tr>
        <th scope="row">5. สร้างระบบตามที่ออกแบบไว้ </th>
        <td>ม.ค.-เม.ย. 67</td>
        <td>Done</td>
      </tr>
  <tr>
        <th scope="row">6. ทดสอบระบบที่สร้างขึ้น</th>
        <td>ม.ค.-เม.ย. 67</td>
        <td>Done</td>
      </tr>
  <tr>
        <th scope="row">7. วิเคราะห์และปรับปรุงระบบให้สมบูรณ์</th>
        <td>เม.ย.-พ.ค. 67</td>
        <td>In Progress</td>
      </tr>
  <tr>
        <th scope="row">8. สรุปผลการดำเนินงาน และสรุปปัญหา</th>
        <td>เม.ย.-พ.ค. 67</td>
        <td>In Progress</td>
      </tr>
  <tr>
        <th scope="row">9. จัดทำเอกสารงานวิจัย</th>
        <td>ต.ค.66-ก.พ. 67</td>
        <td>Done</td>
      </tr>
  <tr>
        <th scope="row">10. ปรับปรุงแก้ไขเอกสารงานวิจัย</th>
        <td>ก.พ.-มิ.ย. 67</td>
        <td>In Progress</td>
      </tr>
  <tr>
        <th scope="row">11. ส่งเอกสารรายงานฉบับสมบูรณ์</th>
        <td>พ.ค.-มิ.ย. 67</td>
        <td>In Progress</td>
      </tr>
  
    </table>
    <a href="/">MyHome</a>
    </body>
    </html>
  `);
});

app.get("/rest/researchplan/", (req, res) => {
  const researchPlan = [
    {
      id: 1,
      description: "เสนอหัวข้อและขอบเขตสารนิพนธ์",
      startDate: "2023-11-01",
      endDate: "2023-11-30"
    },
    {
      id: 2,
      description: "ศึกษาปัญหา ทฤษฎีที่เกี่ยวข้องและความต้องการของระบบ",
      startDate: "2023-10-01",
      endDate: "2023-11-30"
    },
    {
      id: 3,
      description: "ศึกษาและทดลองวิธีการใช้งานโมเดล YOLOv7ระบบตรวจจับใบหน้าบุคคล และตรวจจับร่างกาย ผ่านอุปกรณ์ที่ใช้ในระบบ",
      startDate: "2024-01-01",
      endDate: "2024-02-28"
    },
    {
      id: 4,
      description: "วิเคราะห์ออกแบบระบบและพัฒนา Software ตามความต้องการของระบบ",
      startDate: "2024-03-01",
      endDate: "2024-04-30"
    },
    {
      id: 5,
      description: "สร้างระบบตามที่ออกแบบไว้",
      startDate: "2024-02-01",
      endDate: "2024-02-15"
    },
    {
      id: 6,
      description: "ทดสอบระบบที่สร้างขึ้น",
      startDate: "2024-01-01",
      endDate: "2024-04-30"
    },
    {
      id: 7,
      description: "วิเคราะห์และปรับปรุงระบบให้สมบูรณ์",
      startDate: "2024-04-01",
      endDate: "2024-05-31"
    },
    {
      id: 8,
      description: "สรุปผลการดำเนินงาน และสรุปปัญหา",
      startDate: "2024-04-01",
      endDate: "2024-05-31"
    },
    {
      id: 9,
      description: "จัดทำเอกสารงานวิจัย",
      startDate: "2023-10-01",
      endDate: "2024-02-28"
    },
    {
      id: 10,
      description: "ปรับปรุงแก้ไขเอกสารงานวิจัย",
      startDate: "2024-02-01",
      endDate: "2024-06-30"
    },
    {
      id: 11,
      description: "ส่งเอกสารรายงานฉบับสมบูรณ์",
      startDate: "2024-05-01",
      endDate: "2024-06-30"
    }
  ];

  res.json(researchPlan);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
