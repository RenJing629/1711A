import { UserOutlined, LaptopOutlined, NotificationOutlined, BellOutlined, CommentOutlined } from '@ant-design/icons'

// 试题管理
import AddQuestionPage from '../views/main/question/AddQuestion'
import ClassifyQuestionPage from '../views/main/question/ClassifyQuestion'
import QuestionDetailPage from '../views/main/question/QuestionDetail'
import ViewQuestionPage from '../views/main/question/ViewQuestion'
// 班级管理
import ClassManagerPage from '../views/main/class/ClassManager'
import RoomManagerPage from '../views/main/class/RoomManager'
import StudentManagerPage from '../views/main/class/StudentManager'
// 用户管理
import AddConsumerPage from '../views/main/consumer/AddConsumer'
import ShowConsumerPage from '../views/main/consumer/ShowConsumer'
// 试卷管理
import AddPaperPage from '../views/main/paper/AddPaper'
import PaperDetailPage from '../views/main/paper/PaperDetail'
import PaperListPage from '../views/main/paper/PaperList'
// 阅卷管理
import MarkingDetailPage from '../views/main/marking/MarkingDetail'
import MarkingListPage from '../views/main/marking/MarkingList'
import MarkingStudentListPage from '../views/main/marking/MarkingStudentList'


const menus = [{
    name: '试题管理',
    meta: {
        icon: UserOutlined,
        title: '',
        show: true
    },
    children: [{
        path: '/main/addQuestion',
        name: '添加试题',
        meta: {
            title: '添加试题',
            show: true,
            component: AddQuestionPage,
            view_id: 'main-addQuestions'
        },
    },{
        path: '/main/classifyQuestion',
        name: '试题分类',
        meta: {
            title: '试题分类',
            show: true,
            component: ClassifyQuestionPage,
            view_id: 'main-questionsType'
        },
    },{
        path: '/main/questionDetail',
        name: '试题详情',
        meta: {
            title: '试题详情',
            show: false,
            component: QuestionDetailPage,
            view_id: 'main-questionsDetail'
        },
    },{
        path: '/main/viewQuestion',
        name: '查看试题',
        meta: {
            title: '查看试题',
            show: true,
            component: ViewQuestionPage,
            view_id: 'main-watchQuestions'
        },
    }]
},{
    name: '用户管理',
    meta: {
        icon: LaptopOutlined,
        title: '用户管理',
        show: true
    },
    children: [{
        path: '/main/addConsumer',
        name: '添加用户',
        meta: {
            title: '添加用户',
            show: true,
            component: AddConsumerPage,
            view_id: "1main-addUser"
        },
    },{
        path: '/main/showConsumer',
        name: '用户展示',
        meta: {
            title: '用户展示',
            show: true,
            component: ShowConsumerPage,
            view_id: "1main-showUser"
        },
    }]
},{
    name: '考试管理',
    meta: {
        icon: NotificationOutlined,
        title: '',
        show: true
    },
    children: [{
        path: '/main/addPaper',
        name: '添加考试',
        meta: {
            title: '添加考试',
            show: true,
            component: AddPaperPage,
            view_id: "main-addExam"
        },
    },{
        path: '/main/paperDetail',
        name: '考试详情',
        meta: {
            title: '考试详情',
            show: false,
            component: PaperDetailPage,
            view_id: "main-examDetail"
        },
    },{
        path: '/main/paperList',
        name: '试卷列表',
        meta: {
            title: '试卷列表',
            show: true,
            component: PaperListPage,
            view_id: "main-examList"
        },
    }]
},{
    name: '班级管理',
    meta: {
        icon: BellOutlined,
        title: '班级管理',
        show: true
    },
    children: [{
        path: '/main/classManager',
        name: '班级管理',
        meta: {
            title: '班级管理',
            show: true,
            component: ClassManagerPage,
            view_id: "main-grade"
        },
    },{
        path: '/main/roomManager',
        name: '教室管理',
        meta: {
            title: '教室管理',
            show: true,
            component: RoomManagerPage,
            view_id: "main-room"
        },
    },{
        path: '/main/studentManager',
        name: '学生管理',
        meta: {
            title: '学生管理',
            show: true,
            component: StudentManagerPage,
            view_id: "main-student"
        },
    }]
},{
    name: '阅卷管理',
    meta: {
        icon: CommentOutlined,
        title: '',
        show: true
    },
    children: [{
        path: '/main/markingDetail',
        name: '批卷',
        meta: {
            title: '批卷',
            show: false,
            component: MarkingDetailPage,
            view_id: "main-examinationPapers"
        },
    },{
        path: '/main/markingList',
        name: '待批班级',
        meta: {
            title: '待批班级',
            show: true,
            component: MarkingListPage,
            view_id: "main-examPaperClassList"
        },
    },{
        path: '/main/markingStudentList',
        name: '学生试卷列表',
        meta: {
            title: '学生试卷列表',
            show: false,
            component: MarkingStudentListPage,
            view_id: "main-examPaperClassmate"
        },
    }]
}];

export default menus;
