import BriefcaseIcon from "@/shared/ui/svg/BriefcaseIcon";
import CalendarIcon from "@/shared/ui/svg/CalendarIcon";
import CodeAsteriskIcon from "@/shared/ui/svg/CodeAsteriskIcon";
import CodeIcon from "@/shared/ui/svg/CodeIcon";
import MessageIcon from "@/shared/ui/svg/MessageIcon";
import MicrophoneIcon from "@/shared/ui/svg/MicrophoneIcon";
import ProfileOutlineIcon from "@/shared/ui/svg/ProfileOutlineIcon";
import SparklesIcon from "@/shared/ui/svg/SparklesIcon";
import StackIcon from "@/shared/ui/svg/StackIcon";
import { FilterType } from "@/types/constants";

export const MOBILE_WIDTH_QUERY = '(max-width: 768px)';
export const PHONE_NUMBER = '+7 (499) 110-82-76';
export const PHONE_LINK = '+74991108276';
export const EMAIL_LINK = 'yourcodereview@gmail.com';
export enum ALL_PARAMS {
  SPECIALITY = 'speciality',
  LOCATION = 'location',
  SOURCE = 'source',
  STACK = 'stack',
  GRADE = 'position'
}
export enum ALL_PATHS {
  VACANCIES = '/vacancies',
  QUESTIONS = '/questions'
}
export const SPECIALIZATIONS = [
  {
    id: 1,
    name: 'Python',
    query: 'Python'
  },
  {
    id: 2,
    name: 'Java',
    query: 'Java'
  },
  {
    id: 3,
    name: 'JavaScript',
    query: 'JS',
  },
  {
    id: 4,
    name: 'Data Science',
    query: 'DataScience',
  },
  {
    id: 5,
    name: 'QA',
    query: 'QA'
  },
  {
    id: 6,
    name: 'C#',
    query: 'C#'
  }
]
export const MENU_LINKS = [
  {
    id: 1,
    name: 'Вакансии / Стажировки',
    href: ALL_PATHS.VACANCIES,
    icon: BriefcaseIcon,
    description: 'Актуальные junior-вакансии и стажировки с hh.ru, Habr.Career, LinkedIn,, Telegram и других платформ'
  },
  {
    id: 2,
    name: 'Необходимые навыки',
    href: '/',
    icon: StackIcon,
    description: 'Популярные навыки и ключевые слова из вакансий - можно использовать для улучшения из резюме'
  },
  {
    id: 3,
    name: 'Тестовые задания',
    href: '/',
    icon: CodeIcon,
    description: 'Реальные задания с отборов на стажировки и junior-позиции - для практики и портфолио'
  },
  {
    id: 4,
    name: 'Собеседования',
    href: ALL_PATHS.QUESTIONS,
    icon: MicrophoneIcon,
    description: 'Реальные вопросы с интервью, сгруппированные по стеку и уровню сложности - с пояснениями и примерами ответов'
  },
  {
    id: 5,
    name: 'IT-мероприятия',
    href: '/',
    icon: CalendarIcon,
    description: 'Конференции, хакатоны, метапы и курсы - чтобы расширить кругозор, найти стажировку и завести связи'
  },
  {
    id: 6,
    name: 'Пет-проекты',
    href: '/',
    icon: CodeAsteriskIcon,
    description: 'Проекты для портфолиоб в том числе коммерческие. Отличный способ прокачать скилы и показать опыт'
  },
  {
    id: 7,
    name: 'Контакты рекрутеров',
    href: '/',
    icon: MessageIcon,
    description: 'Контакты рекрутеров и сотрудников, готовых рекомендовать в свою компанию. Можно найти того, кто поможет попасть на собеседование'
  },
  {
    id: 8,
    name: 'ИИ инструменты',
    href: '/',
    icon: SparklesIcon,
    description: 'Подборка AI-тулзов для автоматизации, разработки и поиска работы - с описаниями и рейтингом полезности'
  },
  {
    id: 9,
    name: 'Резюме соискателей',
    href: '/',
    icon: ProfileOutlineIcon,
    description: 'База резюме соискателей. Свяжитесь с понравившемся кандидатами напрямую'
  },
]
export const FOOTER_LINKS = [
  {
    id: 1,
    name: 'Программа и тестирование',
    href: '/'
  },
  {
    id: 2,
    name: 'Тарифы',
    href: '/'
  },
  {
    id: 3,
    name: 'Команда',
    href: '/'
  },
  {
    id: 4,
    name: 'О нас',
    href: '/'
  },
  {
    id: 5,
    name: 'Блог',
    href: '/'
  },
  {
    id: 6,
    name: 'Вакансии',
    href: '/'
  },
  {
    id: 7,
    name: 'Запись',
    href: '/'
  },
  {
    id: 8,
    name: 'Отзывы',
    href: '/'
  },
  {
    id: 9,
    name: 'Вопросы и ответы',
    href: '/'
  },
]
export const CHANNELS_DATA = [
  {
    id: 1,
    path: '/images/youngJune.png',
    alt: '@young_june',
    position: 'top-6.5 left-7.5',
    positionClassName: 'bottom-0 left-4 -rotate-11'
  },
  {
    id: 2,
    path: '/images/itInterns.png',
    alt: '@it_interns',
    position: 'top-7 right-10.5',
    positionClassName: 'top-3 -left-1/4 rotate-7'
  },
  {
    id: 3,
    path: '/images/junoJobs.png',
    alt: '@juno_jobs',
    position: 'top-34 left-32',
    positionClassName: 'bottom-0 -left-1/8 rotate-17'
  },
  {
    id: 4,
    path: '/images/youngIntern.png',
    alt: '@young_intern',
    position: 'top-57 right-6',
    positionClassName: 'top-0 -rotate-7'
  },
  {
    id: 5,
    path: '/images/bigTech.png',
    alt: '@bigtechjobs',
    position: 'bottom-41 left-9',
    positionClassName: 'bottom-5 left-1/3 -rotate-4'
  },
  {
    id: 6,
    path: '/images/juniorDesigners.png',
    alt: '@junior_designers',
    position: 'bottom-11 left-15',
    positionClassName: 'top-1/3 -left-1/8 rotate-5'
  },
  {
    id: 7,
    path: '/images/yourCodeReview.png',
    alt: '@YourCodeReview',
    position: 'bottom-15 right-12',
    positionClassName: 'bottom-5 -left-1/10 -rotate-10'
  },
]
export const CITIES = [
  {
    id: 1,
    name: 'Москва',
    query: 'Andrewchester'
  },
  {
    id: 2,
    name: 'Санкт-Петербург',
    query: 'Williamsville'
  },
  {
    id: 3,
    name: 'Нижний Новгород',
    query: 'Myershaven'
  },
  {
    id: 4,
    name: 'Омск',
    query: 'Devonbury'
  },
  {
    id: 5,
    name: 'Красноярск',
    query: 'Port Laurenland'
  },
  {
    id: 6,
    name: 'Самара',
    query: 'West Dennisfurt'
  },
]
export const SOURCES = [
  {
    id: 1,
    name: 'LinkedIn',
    query: 'LinkedIn'
  },
  {
    id: 2,
    name: 'Indeed',
    query: 'Indeed'
  },
  {
    id: 3,
    name: 'HH.ru',
    query: 'HH.ru'
  },
]
export const STACKS = [
  {
    id: 1,
    name: 'Java Java',
    query: 'java java',
  },
  {
    id: 2,
    name: 'JS Java Go',
    query: 'js java go',
  },
]
export const GRADES = [
  {
    id: 1,
    name: 'Junior',
    query: 'IT consultant'
  }
]
export const DEFAULT_FILTER_TAGS = [
  {
    id: 1,
    name: "Стажировки без опыта",
    query: 'intership=true',
  },
  {
    id: 2,
    name: "Junior вакансии",
    query: 'level=junior',
  },
];

export const SPECIALITY_TAGS_MAP: Record<string, FilterType[]> = {
  Python: [
    { id: 10, name: "Python вакансии", query: 'speciality=Python' },
    { id: 11, name: "Стажировки Python", query: 'speciality=Python&intership=true'},
  ],
  JS: [
    { id: 20, name: "JS вакансии", query: 'speciality=JS' },
  ],
  
};
