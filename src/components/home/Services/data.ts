import Design from '@images/design.svg';
import Web from '@images/development.svg';
import Marketing from '@images/Marketing.svg';

const serviceData = [
  {
    _id: 0,
    name: 'Graphics Design',
    content:
      "The art of creating visual content to communicate a message to a target audience. It involves using different elements such as typography, colors, images, and layout to convey a specific message or idea.",
    icon: Design,
    link: '/design',
  },
  {
    _id: 1,
    name: 'Design & Development',
    content:
      "Two key components of the software development process. Design involves creating a plan or blueprint for a software application or system, while development involves building the software based on that plan.",
    icon: Web,
    link: '/development',
  },
  {
    _id: 2,
    name: 'Digital Marketing',
    content:
      "The process of promoting products, services or brands using various digital channels and tactics to reach potential customers and convert them into paying customers.",
    icon: Marketing,
    link: '/digital-marketing',
  },
];

export default serviceData;
