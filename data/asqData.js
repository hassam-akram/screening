const asqData = [
  {
    ageInterval: 12, // 12 Month Questionnaire
    description: "For children ages 11 months 0 days through 12 months 30 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "Does your baby make sounds like 'da', 'ga', 'ka', and 'ba'?" },
          { questionNumber: 2, text: "If you ask your baby to, does he play at making sounds such as 'ooo', 'ahh'?" },
          // ... usually there are 6 questions per domain
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "Does your baby hold on to furniture while walking?" },
          { questionNumber: 2, text: "Does your baby stand up in the middle of the floor by himself?" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "Does your baby pick up a string with her thumb and forefinger?" },
          { questionNumber: 2, text: "Does your baby put a small toy down, without dropping it?" }
        ]
      },
      // You would add Problem Solving and Personal-Social here...
    ]
  }
];

module.exports = asqData;