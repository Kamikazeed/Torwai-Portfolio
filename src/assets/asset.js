
import prototype from './Wither.webp';

const portfolio = 'https://res.cloudinary.com/douxhwl8g/video/upload/v1781009689/portfolioWeb_nctnwy.mp4';
const chatApp = 'https://res.cloudinary.com/douxhwl8g/video/upload/v1781009690/chatapp_ctpieh.mp4';
const quickblog = 'https://res.cloudinary.com/douxhwl8g/video/upload/v1781009699/quickblog_oambgz.mp4';
const auth = 'https://res.cloudinary.com/douxhwl8g/video/upload/v1781009685/auth_ewutov.mp4';

import auth_logo from './favicon-auth.svg'
import quickblog_logo from './favicon-quickblog.svg'
import quickchat_logo from './favicon-quickchat.svg'

import facebook_logo from './facebook.svg';
import github_logo from './github.svg';
import link_logo from './link.svg';
import link_arrow_logo from './link_arrow.svg';

import html from './html.svg';
import css from './css.svg';
import javaScript from './javascript.svg';
import react from './react.svg';
import tailwind from './tailwindcss.svg';
import vite from './vite.svg';
import reactRouter from './reactrouter.svg';
import axios from './axios.svg';
import socket from './socket.svg';
import motion from './motion.svg';
import npm from './npm.svg';

import nodeJS from './nodejs.svg';
import mongoDB from './mongoDB.svg';
import expressJS from './express.svg';
import cloudinary from './cloudinary.svg';

import vsCode from './vscode.svg';
import chatGPT from './chatgpt.svg';
import youtube from './youtube.svg';
import figma from './figma.svg';
import canva from './canva.svg';
import gemini from './gemini.svg';

export const assets = {
  facebook_logo,
  github_logo,
  link_logo,
  link_arrow_logo,
  prototype
}

export const navItem = [
  {name: 'Home', id: 'Home'},
  {name: 'About', id: 'About'},
  {name: 'Skills', id: 'Skills'},
  {name: 'Projects', id: 'Projects'},
  {name: 'Contact', id: 'Contact'}
]

export const buttons = [
  {
    icon: link_logo,
    text: "Live Demo"
  },
  {
    icon: link_arrow_logo,
    text: "Project"
  },
  {
    icon: figma,
    text: "Figma"
  },
]

export const paragraphs = [
  'ผมชื่อ ต่อวัย พิมพบุตร ชื่อเล่น แชมป์ อายุ 18 ปี มึความสนใจเกี่ยวกับคอมพิวเตอร์ตั้งแต่ยังเด็ก เนื่องจากมีโอกาสได้ไปเล่นเกมที่ร้านเกมกับพี่ชาย จึงทำมีความชอบในการเล่นเกมเช่นกัน — ผมได้โน๊ตบุ๊คเครื่องแรกตอน ม.3 หลังจากได้โน๊ตบุ๊คมา ผมก็ได้เล่นเกม PC แบบสมใจอยาก — ในไม่นานผมก็ได้เริ่มใช้โน๊ตบุ๊คทำสไลด์นำเสอนงาน ทำรายงาน และใช้เขียนโค้ด แต่การเขียนโค้ดก็ยังออกมาไม่ดีมาก ผมจึงได้ไปศึกษาเพิ่มเติม นั้นทำให้รู้ว่าผมอยากจะเขียนโค้ดและชอบที่จะได้เรียนรู้สิ่งใหม่ๆ',
  'ผมเริ่มศึกษาและฝึกเขียนโค้ดอย่างจริงจังตั้งแต่ ม.4 ( 2567 ) โดยได้ตั้งเป้าหมายไว้ว่าภายใน พ.ศ.2567 - 2570 จะต้องมีทักษะในการพัฒนาเว็บไซต์ทั้ง Frontend  Backend และสามารถใช้เครื่องมือได้อย่างชำนาญ ผมเริ่มต้นจากการศึกษาที่ฝั่ง Frontend เพื่อทำเกี่ยวกับหน้าเว็บ แล้วไปศึกษาต่อที่ฝั่ง Backend เพื่อให้เว็บไซต์สามารถทำงานร่วมกับฐานข้อมูลได้ หลังนั้นจึงเริ่มใช้ Figma เพื่อออกแบบโครงสร้างเว็บไซต์และใช้ GitHub เพื่อให้สามารถอัปเดตหรือแก้ไข Project ได้โดยที่ไม่กระทบกับ Main Project',
  'หลังจากที่มีพื้นฐาน ผมก็เริ่มฝึกสร้างเว็บไซต์แบบ Full Stack โดยใช้ MongoDB Express.js React Node.js ( MERN ) ในการเขียนโค้ดเป็นหลัก โดยส่วนใหญ่ก็เพื่อฝึกทักษะในการแก้ไขปัญหาอยางเป็นระบบ หลังจากที่สร้างเว็บไซต์เสร็จก็จะมาทบโค้ดที่ได้เขียนลงไปอีกที แล้วส่งโค้ดให้ AI ตรวจสอบและให้แนะนำจุดที่ควรแก้เพื่อให้โค้ดทำงานได้อย่างมีประสิทธิภาพ',
  'เวลาที่ทำงานผมมักจะฟังเพลง เพราะทำให้รู้สึกทำงานได้ดีและมีสมาธิมากขึ้น — เมื่อไม่ได้ทำงานจะพักผ่อนด้วยการเปิด Podcast ฟังพร้อมไปกับการเล่นเกม หรือดูอนิเมะและภาพยนต์'
]

export const projectCard = [
  {
    name: 'Portfolio',
    description: 'เว็บไซต์ Portfolio ส่วนตัวที่สร้างขึ้นเพื่อแสดงทักษะ ผลงาน และวิธีการคิด โดยใช้ Figma ในการออกแบบ และใช้ React ในการสร้าง',
    tool: [
      {
        "icon": html,
        "name": "HTML"
      },
      {
        "icon": css,
        "name": "CSS"
      },
      {
        "icon": javaScript,
        "name": "JavaScript"
      },
      {
        "icon": react,
        "name": "React"
      },
      {
        "icon": tailwind,
        "name": "Tailwind CSS"
      },
      {
        "icon": reactRouter,
        "name": "React Router"
      },
      {
        "icon": motion,
        "name": "Motion"
      },
    ],
    video: portfolio,
    link: 'https://www.figma.com/design/ssKHDghC8rimcZPJsYX0By/Portfolio?node-id=0-1&p=f&t=Nk4GkhFtciEyoige-0',
    year: '2026',
  },
  {
    name: 'ChatApp',
    description: 'Chat App สามารถสนทนา ส่งข้อความและรูปภาพได้แบบเรียลไทม์ ใช้ React และ Tailwind ในการสร้างแอป และใช้ Socket.IO ในการทำระบบรับส่งข้อความแบบเรียลไทม์',
    tool: [
      {
        "icon": html,
        "name": "HTML"
      },
      {
        "icon": css,
        "name": "CSS"
      },
      {
        "icon": javaScript,
        "name": "JavaScript"
      },
      {
        "icon": react,
        "name": "React"
      },
      {
        "icon": tailwind,
        "name": "Tailwind CSS"
      },
      {
        "icon": reactRouter,
        "name": "React Router"
      },
      {
        "icon": axios,
        "name": "Axios"
      },
      {
        "icon": socket,
        "name": "Socket.IO"
      },
      {
        "icon": nodeJS,
        "name": "Node.js"
      },
      {
        "icon": mongoDB,
        "name": "MongoDB"
      },
      {
        "icon": expressJS,
        "name": "Express.js"
      },
      {
        "icon": cloudinary,
        "name": "Cloudinary"
      },
    ],
    video: chatApp,
    link: '/',
    year: '2026',
  },
  {
    name: 'QuickBlog',
    description: 'Web Blog ที่ใช้ AI เข้ามาช่วยในการสร้าง blog โดยใช้ Gemini API มาช่วยในการคิด description ใช้ React และ Node.js ในการพัฒนา',
    tool: [
      {
        "icon": html,
        "name": "HTML"
      },
      {
        "icon": css,
        "name": "CSS"
      },
      {
        "icon": javaScript,
        "name": "JavaScript"
      },
      {
        "icon": react,
        "name": "React"
      },
      {
        "icon": tailwind,
        "name": "Tailwind CSS"
      },
      {
        "icon": reactRouter,
        "name": "React Router"
      },
      {
        "icon": axios,
        "name": "Axios"
      },
      {
        "icon": socket,
        "name": "Socket.IO"
      },
      {
        "icon": motion,
        "name": "Motion"
      },
      {
        "icon": nodeJS,
        "name": "Node.js"
      },
      {
        "icon": mongoDB,
        "name": "MongoDB"
      },
      {
        "icon": expressJS,
        "name": "Express.js"
      },
      {
        "icon": gemini,
        "name": "Gemini"
      },
    ],
    video: quickblog,
    link: '/',
    year: '2026',
  },
  {
    name: 'Auth',
    description: 'Auth App ทำขึ้นเพื่อแสดงทักษะในการทำระบบ login หรือ sign up การจัดการกับข้อมูลหลังยืนยันตัวตน และมี่การส่ง OTP เพื่อยืนยันและรีเซ็ตรหัส ใช้ React และ Node.js ในการพัฒนา',
    tool: [
      {
        "icon": html,
        "name": "HTML"
      },
      {
        "icon": css,
        "name": "CSS"
      },
      {
        "icon": javaScript,
        "name": "JavaScript"
      },
      {
        "icon": react,
        "name": "React"
      },
      {
        "icon": tailwind,
        "name": "Tailwind CSS"
      },
      {
        "icon": reactRouter,
        "name": "React Router"
      },
      {
        "icon": axios,
        "name": "Axios"
      },
      {
        "icon": nodeJS,
        "name": "Node.js"
      },
      {
        "icon": mongoDB,
        "name": "MongoDB"
      },
      {
        "icon": expressJS,
        "name": "Express.js"
      },
    ],
    video: auth,
    link: '/',
    year: '2026',
  },
]

export const projectInfo = [
  {
    logo: quickchat_logo,
    name: 'QuickChat',
    description: 'Chat App สามารถสนทนา ส่งข้อความและรูปภาพได้แบบเรียลไทม์ ใช้ React และ Tailwind ในการสร้างแอป และใช้ Socket.IO ในการทำระบบรับส่งข้อความแบบเรียลไทม์',
    video: chatApp,
    feature: [
      {
        title: 'Sign Up & Login',
        detail: 'ระบบสำหรับสร้างบัญชีหรือใส่ข้อมูลเพื่อเข้าสู่บัญชี',
      },
      {
        title: 'Notificaction',
        detail: 'การแจ้งเตือนเมื่อเข้าสู่บัญชี ออกจากบัญชีหรือทำการแก้ไขข้อมูลบัญชี',
      },
      {
        title: 'User Search',
        detail: 'ระบบค้นหาผู้ใช้งานโดยใช้ชื่อ',
      },
      {
        title: 'Edit Profile',
        detail: 'ระบบแก้ข้อมูลบัญชีผู้ใช้งาน',
      },
      {
        title: 'Real-Time Chat',
        detail: 'การสนทนาระหว่างผู้ใช้แบบเรียลไทม์ โดยใช้ Socket.IO เพื่อให้สามารถสนทนาได้อย่างราบรื่น',
      },
      {
        title: 'Responsive Design',
        detail: 'ใช้งานเว็บไซต์ได้อย่างราบรื่นกับทุกอุปกรณ์ ดีไซต์ที่ออกแบบมาเพื่อตอบสนองต่อขนาดหน้าจอต่างๆ',
      },
    ],
    tech: [
      {
        "icon": html,
        "name": "HTML"
      },
      {
        "icon": css,
        "name": "CSS"
      },
      {
        "icon": javaScript,
        "name": "JavaScript"
      },
      {
        "icon": react,
        "name": "React"
      },
      {
        "icon": tailwind,
        "name": "Tailwind CSS"
      },
      {
        "icon": reactRouter,
        "name": "React Router"
      },
      {
        "icon": axios,
        "name": "Axios"
      },
      {
        "icon": socket,
        "name": "Socket.IO"
      },
      {
        "icon": nodeJS,
        "name": "Node.js"
      },
      {
        "icon": mongoDB,
        "name": "MongoDB"
      },
      {
        "icon": expressJS,
        "name": "Express.js"
      },
      {
        "icon": cloudinary,
        "name": "Cloudinary"
      },
    ],
  },
  {
    logo: quickblog_logo,
    name: 'QuickBlog',
    description: 'Web Blog ที่ใช้ AI เข้ามาช่วยในการสร้าง blog โดยใช้ Gemini API มาช่วยในการคิด description ใช้ React และ Node.js ในการพัฒนา',
    video: quickblog,
    feature: [
      {
        title: 'Responsive Design',
        detail: 'ใช้งานเว็บไซต์ได้อย่างราบรื่นกับทุกอุปกรณ์ ดีไซต์ที่ออกแบบมาเพื่อตอบสนองต่อขนาดหน้าจอต่างๆ',
      },
      {
        title: 'Blog title and category search',
        detail: 'ค้นหาบล็อกที่ต้องการได้อย่างง่าย โดยใช้เพียงแค่หมวดหมู่หรือชื่อบล็อก',
      },
      {
        title: 'login',
        detail: 'ระบบยืนยันตัวตนเพื่อเข้าไปจัดเกี่ยวกับบล็อกและความคิดเห็นต่างๆ',
      },
      {
        title: 'Dashboard',
        detail: 'แสดงข้อมูลจำนวนบล็อก ความคิดเห็น และบล็อกที่ยังไม่ได้เผยแพร่',
      },
      {
        title: 'Blogs list',
        detail: 'จัดการกับรายการบล็อกทั้งหมด สามารถเผยแพร่ ไม่เผยแพร่ หรือลบบล็อกที่สร้างขึ้นได้',
      },
      {
        title: 'Comments list',
        detail: 'จัดการกับความคิดเห็นที่ส่งเข้า โดยให้เผยแพร่หรือลบความคิดเห็น',
      },
      {
        title: 'Add Blog ',
        detail: 'สามารถเพิ่มบล็อกและจัดการข้อมูลต่างๆ ก่อนเพิ่มเข้าไปในเว็บบล็อก',
      },
      {
        title: 'Add Comment',
        detail: 'สามารถแสดงความคิดเห็นในแต่ละบล็อกที่เข้าไปดูได้',
      },
      {
        title: 'Generate Description',
        detail: 'ใช้ Gemini API ในการสร้างเนื้อหาภายในบล็อก โดยใช้ชื่อบล็อก',
      },
    ],
    tech: [
      {
        "icon": html,
        "name": "HTML"
      },
      {
        "icon": css,
        "name": "CSS"
      },
      {
        "icon": javaScript,
        "name": "JavaScript"
      },
      {
        "icon": react,
        "name": "React"
      },
      {
        "icon": tailwind,
        "name": "Tailwind CSS"
      },
      {
        "icon": reactRouter,
        "name": "React Router"
      },
      {
        "icon": axios,
        "name": "Axios"
      },
      {
        "icon": motion,
        "name": "Motion"
      },
      {
        "icon": nodeJS,
        "name": "Node.js"
      },
      {
        "icon": mongoDB,
        "name": "MongoDB"
      },
      {
        "icon": expressJS,
        "name": "Express.js"
      },
      {
        "icon": gemini,
        "name": "Gemini"
      },
    ],
  },
  {
    logo: auth_logo,
    name: 'Auth',
    description: 'Auth App ทำขึ้นเพื่อแสดงทักษะในการทำระบบ login หรือ sign up การจัดการกับข้อมูลหลังยืนยันตัวตน และมี่การส่ง OTP เพื่อยืนยันและรีเซ็ตรหัส ใช้ React และ Node.js ในการพัฒนา',
    video: auth,
    feature: [
      {
        title: 'Validation',
        detail: 'การตรวจสอบข้อมูลก่อนเข้าสู่ระบบ',
      },
      {
        title: 'Verification',
        detail: 'การยืนยันตัวตนผู้ใช้งานเพื่อเพิ่มความปลอดภัย',
      },
      {
        title: 'Reset Password',
        detail: 'ระบบยืนยันเพื่อรีเซ็ตรหัสผ่าน',
      },
      {
        title: 'Responsive Design',
        detail: 'ใช้งานเว็บไซต์ได้อย่างราบรื่นกับทุกอุปกรณ์ ดีไซต์ที่ออกแบบมาเพื่อตอบสนองต่อขนาดหน้าจอต่างๆ',
      },
    ],
    tech: [
      {
        "icon": html,
        "name": "HTML"
      },
      {
        "icon": css,
        "name": "CSS"
      },
      {
        "icon": javaScript,
        "name": "JavaScript"
      },
      {
        "icon": react,
        "name": "React"
      },
      {
        "icon": tailwind,
        "name": "Tailwind CSS"
      },
      {
        "icon": reactRouter,
        "name": "React Router"
      },
      {
        "icon": axios,
        "name": "Axios"
      },
      {
        "icon": nodeJS,
        "name": "Node.js"
      },
      {
        "icon": mongoDB,
        "name": "MongoDB"
      },
      {
        "icon": expressJS,
        "name": "Express.js"
      },
    ],
  },
]