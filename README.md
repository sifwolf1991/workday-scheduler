# Work Day Scheduler

## Table of Contents

1. Description
2. Badges
3. Visuals
4. Installation
5. Usage
6. Support
7. Contributing
8. Authors and acknowledgment
9. License

## 1. Description

This app operates as a scheduling tool to help you manage and visualize your daily plans.

It allows you customize your plans for each day and view in an organized colour-coded schedule layout. You can use it to create reminders, note deadlines, appointments, due dates, and more. The data is saved so you can view or edit plans as you need at a later time.

## 2. Badges

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)


![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)


![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)

![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)

![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)

![IE](https://img.shields.io/badge/Internet%20Explorer-0076D6?style=for-the-badge&logo=Internet%20Explorer&logoColor=white)

	![Opera](https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white)

![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)

## 3. Visuals

![SCHEDULER PHOTO 1](https://github.com/sifwolf1991/prework-study-guide/assets/139626561/9d66e1d7-0e02-4c73-8d88-e8b1bf33fc45)

![SCHEDULER PHOTO 2](https://github.com/sifwolf1991/prework-study-guide/assets/139626561/3e6e7d66-5689-4209-a093-3a18176cba82)

## 4. Installation

The website is deployed over GitHub. Access the app at the URLS:

GitHub repository URL:

https://github.com/sifwolf1991

Scheduler App URL:

https://sifwolf1991.github.io/workday-scheduler

The HTML, CSS and JS code can be accessed through a code editor such as Visual Code Studio. 

Instructions for using the app:

1.	The current date is displayed at the top
2.	The current hour block is displayed red, past hours are grey, and upcoming hours are green.
3.	Input your plans into the fillable entry fields for each hour
4.	Click the save button, text will be saved on page refresh
5.	To remove items, delete text and save

## 5. Usage

This app uses JavaScript to allow you to customize the scheduler with your own plans, input them, save, and retrieve your data. The JavaScript also interacts with CSS styling to colour-code hourly blocks for visual convenience.

1.	JS takes the current date and day through dayjs, and renders it into the HTML document
2.	Interactive save button event listeners allow text plans to be saved into local storage. JS allows you to view your plans when returning to the browser, by accessing local storage and printing out any previously input information for each hour block.
3.	JS applies colour-coded CSS classes to hourly blocks based on current time, for clearer visualization. 
a.	It uses an ‘if statement’ to compare and apply the ‘past’ class to the hourly block ids that correspond to the current hour. Hourly blocks falling before the current hour are green, the hourly block matching the current hour is red, every other hourly block (in the future) is green. 

## 6. Support

For support, users can contact tydamon@hotmail.com.

## 8. Contributing

Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". 
1.	Fork the Project
2.	Create your Feature Branch (git checkout -b feature/NewFeature)
3.	Commit your Changes (git commit -m 'Add some NewFeature')
4.	Push to the Branch (git push origin feature/NewFeature)
5.	Open a Pull Request

## 9. Authors and acknowledgment

The author acknowledges and credits those who have contributed to this project, including:
•	Provided Starter Code
•	https://git.bootcampcontent.com/Monash-University/MONU-VIRT-FSF-PT-11-2023-U-LOLC
•	Chee Ho Tai
•	Pranita Shrestha

## 10. License

Distributed under the MIT License. See LICENSE.txt for more information.

