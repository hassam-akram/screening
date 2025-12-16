const asqData = [
  {
    ageInterval: 12,
    description: "For children ages 11 months 0 days through 12 months 30 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "Does your baby make two similar sounds, such as 'ba-ba,' 'da-da,' or 'ga-ga'? (The sounds do not need to mean anything.)" },
          { questionNumber: 2, text: "If you ask your baby to, does he play at least one nursery game even if you don't show him the activity yourself (such as 'bye-bye,' 'Peeka-boo,' 'clap your hands,' 'So Big')?" },
          { questionNumber: 3, text: "Does your baby follow one simple command, such as 'Come here,' 'Give it to me,' or 'Put it back,' without your using gestures?" },
          { questionNumber: 4, text: "Does your baby say three words, such as 'Mama,' 'Dada,' and 'Baba'? (A 'word' is a sound or sounds your baby says consistently to mean someone or something.)" },
          { questionNumber: 5, text: "When you ask, 'Where is the ball (hat, shoe, etc.)?' does your baby look at the object? (Make sure the object is present. Mark 'yes' if she knows one object.)" },
          { questionNumber: 6, text: "When your baby wants something, does he tell you by pointing to it?" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "While holding onto furniture, does your baby bend down and pick up a toy from the floor and then return to a standing position?" },
          { questionNumber: 2, text: "While holding onto furniture, does your baby lower herself with control (without falling or flopping down)?" },
          { questionNumber: 3, text: "Does your baby walk beside furniture while holding on with only one hand?" },
          { questionNumber: 4, text: "If you hold both hands just to balance your baby, does he take several steps without tripping or falling? (If your baby already walks alone, mark 'yes' for this item.)" },
          { questionNumber: 5, text: "When you hold one hand just to balance your baby, does she take several steps forward? (If your baby already walks alone, mark 'yes' for this item.)" },
          { questionNumber: 6, text: "Does your baby stand up in the middle of the floor by himself and take several steps forward?" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "After one or two tries, does your baby pick up a piece of string with his first finger and thumb? (The string may be attached to a toy.)" },
          { questionNumber: 2, text: "Does your baby pick up a crumb or Cheerio with the tips of her thumb and a finger? She may rest her arm or hand on the table while doing it." },
          { questionNumber: 3, text: "Does your baby put a small toy down, without dropping it, and then take his hand off the toy?" },
          { questionNumber: 4, text: "Without resting her arm or hand on the table, does your baby pick up a crumb or Cheerio with the tips of her thumb and a finger?" },
          { questionNumber: 5, text: "Does your baby throw a small ball with a forward arm motion? (If he simply drops the ball, mark 'not yet' for this item.)" },
          { questionNumber: 6, text: "Does your baby help turn the pages of a book? (You may lift a page for him to grasp.)" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "When holding a small toy in each hand, does your baby clap the toys together (like 'Pat-a-cake')?" },
          { questionNumber: 2, text: "Does your baby poke at or try to get a crumb or Cheerio that is inside a clear bottle (such as a plastic soda-pop bottle or baby bottle)?" },
          { questionNumber: 3, text: "After watching you hide a small toy under a piece of paper or cloth, does your baby find it? (Be sure the toy is completely hidden.)" },
          { questionNumber: 4, text: "If you put a small toy into a bowl or box, does your baby copy you by putting in a toy, although she may not let go of it? (If she already lets go of the toy into a bowl or box, mark 'yes' for this item.)" },
          { questionNumber: 5, text: "Does your baby drop two small toys, one after the other, into a container like a bowl or box? (You may show him how to do it.)" },
          { questionNumber: 6, text: "After you scribble back and forth on paper with a crayon (or a pencil or pen), does your baby copy you by scribbling? (If she already scribbles on her own, mark 'yes' for this item.)" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "When you hold out your hand and ask for his toy, does your baby offer it to you even if he doesn't let go of it? (If he already lets go of the toy into your hand, mark 'yes' for this item.)" },
          { questionNumber: 2, text: "When you dress your baby, does she push her arm through a sleeve once her arm is started in the hole of the sleeve?" },
          { questionNumber: 3, text: "When you hold out your hand and ask for his toy, does your baby let go of it into your hand?" },
          { questionNumber: 4, text: "When you dress your baby, does she lift her foot for her shoe, sock, or pant leg?" },
          { questionNumber: 5, text: "Does your baby roll or throw a ball back to you so that you can return it to him?" },
          { questionNumber: 6, text: "Does your baby play with a doll or stuffed animal by hugging it?" }
        ]
      }
    ]
  },
  {
    ageInterval: 14,
    description: "For children ages 13 months 0 days through 14 months 30 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "Does your baby say three words, such as 'Mama,' 'Dada,' and 'Baba'? (A 'word' is a sound or sounds your baby says consistently to mean someone or something.)" },
          { questionNumber: 2, text: "When your baby wants something, does she tell you by pointing to it?" },
          { questionNumber: 3, text: "Does your baby shake his head when he means 'no' or 'yes'?" },
          { questionNumber: 4, text: "Does your baby point to, pat, or try to pick up pictures in a book?" },
          { questionNumber: 5, text: "Does your baby say four or more words in addition to 'Mama' and 'Dada'?" },
          { questionNumber: 6, text: "When you ask her to, does your baby go into another room to find a familiar toy or object? (You might ask, 'Where is your ball?' or say, 'Bring me your coat,' or 'Go get your blanket.')" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "If you hold both hands just to balance your baby, does he take several steps without tripping or falling? (If your baby already walks alone, mark 'yes' for this item.)" },
          { questionNumber: 2, text: "When you hold one hand just to balance your baby, does she take several steps forward? (If your baby already walks alone, mark 'yes' for this item.)" },
          { questionNumber: 3, text: "Does your baby stand up in the middle of the floor by himself and take several steps forward?" },
          { questionNumber: 4, text: "Does your baby climb onto furniture or other large objects, such as large climbing blocks?" },
          { questionNumber: 5, text: "Does your baby bend over or squat to pick up an object from the floor and then stand up again without any support?" },
          { questionNumber: 6, text: "Does your baby move around by walking, rather than by crawling on his hands and knees?" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "Without resting her arm or hand on the table, does your baby pick up a crumb or Cheerio with the tips of her thumb and a finger?" },
          { questionNumber: 2, text: "Does your baby throw a small ball with a forward arm motion? (If he simply drops the ball, mark 'not yet' for this item.)" },
          { questionNumber: 3, text: "Does your baby help turn the pages of a book? (You may lift a page for her to grasp.)" },
          { questionNumber: 4, text: "Does your baby stack a small block or toy on top of another one? (You could also use spools of thread, small boxes, or toys that are about 1 inch in size.)" },
          { questionNumber: 5, text: "Does your baby make a mark on the paper with the tip of a crayon (or pencil or pen) when trying to draw?" },
          { questionNumber: 6, text: "Does your baby stack three small blocks or toys on top of each other by herself?" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "If you put a small toy into a bowl or box, does your baby copy you by putting in a toy, although he may not let go of it? (If he already lets go of the toy into a bowl or box, mark 'yes' for this item.)" },
          { questionNumber: 2, text: "Does your baby drop two small toys, one after the other, into a container like a bowl or box? (You may show her how to do it.)" },
          { questionNumber: 3, text: "After you scribble back and forth on paper with a crayon (or a pencil or pen), does your baby copy you by scribbling? (If he already scribbles on his own, mark 'yes' for this item.)" },
          { questionNumber: 4, text: "Can your baby drop a crumb or Cheerio into a small, clear bottle (such as a plastic soda-pop bottle or baby bottle)?" },
          { questionNumber: 5, text: "Does your baby drop several small toys, one after another, into a container like a bowl or box? (You may show her how to do it.)" },
          { questionNumber: 6, text: "After you have shown your baby how, does he try to get a small toy that is slightly out of reach by using a spoon, stick, or similar tool?" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "When you dress your baby, does she lift her foot for her shoe, sock, or pant leg?" },
          { questionNumber: 2, text: "Does your baby roll or throw a ball back to you so that you can return it to him?" },
          { questionNumber: 3, text: "Does your baby play with a doll or stuffed animal by hugging it?" },
          { questionNumber: 4, text: "Does your baby feed herself with a spoon, even though she may spill some food?" },
          { questionNumber: 5, text: "Does your baby help undress himself by taking off clothes like socks, hat, shoes, or mittens?" },
          { questionNumber: 6, text: "Does your baby get your attention or try to show you something by pulling on your hand or clothes?" }
        ]
      }
    ]
  },
  {
    ageInterval: 16,
    description: "For children ages 15 months 0 days through 16 months 30 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "Does your child point to, pat, or try to pick up pictures in a book?" },
          { questionNumber: 2, text: "Does your child say four or more words in addition to 'Mama' and 'Dada'?" },
          { questionNumber: 3, text: "When your child wants something, does she tell you by pointing to it?" },
          { questionNumber: 4, text: "When you ask your child to, does he go into another room to find a familiar toy or object? (You might ask, 'Where is your ball?' or say, 'Bring me your coat,' or 'Go get your blanket.')" },
          { questionNumber: 5, text: "Does your child imitate a two-word sentence? For example, when you say a two-word phrase, such as 'Mama eat,' 'Daddy play,' 'Go home,' or 'What's this?' does your child say both words back to you? (Mark 'yes' even if her words are difficult to understand.)" },
          { questionNumber: 6, text: "Does your child say eight or more words in addition to 'Mama' and 'Dada'?" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "Does your child stand up in the middle of the floor by himself and take several steps forward?" },
          { questionNumber: 2, text: "Does your child climb onto furniture or other large objects, such as large climbing blocks?" },
          { questionNumber: 3, text: "Does your child bend over or squat to pick up an object from the floor and then stand up again without any support?" },
          { questionNumber: 4, text: "Does your child move around by walking, rather than crawling on her hands and knees?" },
          { questionNumber: 5, text: "Does your child walk well and seldom fall?" },
          { questionNumber: 6, text: "Does your child climb on an object such as a chair to reach something he wants (for example, to get a toy on a counter or to 'help' you in the kitchen)?" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "Does your child help turn the pages of a book? (You may lift a page for her to grasp.)" },
          { questionNumber: 2, text: "Does your child throw a small ball with a forward arm motion? (If he simply drops the ball, mark 'not yet' for this item.)" },
          { questionNumber: 3, text: "Does your child stack a small block or toy on top of another one? (You could also use spools of thread, small boxes, or toys that are about 1 inch in size.)" },
          { questionNumber: 4, text: "Does your child stack three small blocks or toys on top of each other by herself?" },
          { questionNumber: 5, text: "Does your child make a mark on the paper with the tip of a crayon (or pencil or pen) when trying to draw?" },
          { questionNumber: 6, text: "Does your child turn the pages of a book by himself? (He may turn more than one page at a time.)" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "After you scribble back and forth on paper with a crayon (or pencil or pen), does your child copy you by scribbling? (If she already scribbles on her own, mark 'yes' for this item.)" },
          { questionNumber: 2, text: "Can your child drop a crumb or Cheerio into a small, clear bottle (such as a plastic soda-pop bottle or baby bottle)?" },
          { questionNumber: 3, text: "Does your child drop several small toys, one after another, into a container like a bowl or box? (You may show him how to do it.)" },
          { questionNumber: 4, text: "After you have shown your child how, does she try to get a small toy that is slightly out of reach by using a spoon, stick, or similar tool?" },
          { questionNumber: 5, text: "Without your showing him how, does your child scribble back and forth when you give him a crayon (or pencil or pen)?" },
          { questionNumber: 6, text: "After a crumb or Cheerio is dropped into a small, clear bottle, does your child turn the bottle upside down to dump it out? (You may show her how.)" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "Does your child feed himself with a spoon, even though he may spill some food?" },
          { questionNumber: 2, text: "Does your child help undress herself by taking off clothes like socks, hat, shoes, or mittens?" },
          { questionNumber: 3, text: "Does your child play with a doll or stuffed animal by hugging it?" },
          { questionNumber: 4, text: "While looking at himself in the mirror, does your child offer a toy to his own image?" },
          { questionNumber: 5, text: "Does your child get your attention or try to show you something by pulling on your hand or clothes?" },
          { questionNumber: 6, text: "Does your child come to you when she needs help, such as with winding up a toy or unscrewing a lid from a jar?" }
        ]
      }
    ]
  },
  {
    ageInterval: 18,
    description: "For children ages 17 months 0 days through 18 months 30 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "When your child wants something, does she tell you by pointing to it?" },
          { questionNumber: 2, text: "When you ask your child to, does he go into another room to find a familiar toy or object? (You might ask, 'Where is your ball?' or say, 'Bring me your coat,' or 'Go get your blanket.')" },
          { questionNumber: 3, text: "Does your child say eight or more words in addition to 'Mama' and 'Dada'?" },
          { questionNumber: 4, text: "Does your child imitate a two-word sentence? For example, when you say a two-word phrase, such as 'Mama eat,' 'Daddy play,' 'Go home,' or 'What's this?' does your child say both words back to you? (Mark 'yes' even if her words are difficult to understand.)" },
          { questionNumber: 5, text: "Without your showing him, does your child point to the correct picture when you say, 'Show me the kitty,' or ask, 'Where is the dog?' (He needs to identify only one picture correctly.)" },
          { questionNumber: 6, text: "Does your child say two or three words that represent different ideas together, such as 'See dog,' 'Mommy come home,' or 'Kitty gone'? (Don't count word combinations that express one idea, such as 'bye-bye,' 'all gone,' 'all right,' and 'What's that?')" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "Does your child bend over or squat to pick up an object from the floor and then stand up again without any support?" },
          { questionNumber: 2, text: "Does your child move around by walking, rather than by crawling on her hands and knees?" },
          { questionNumber: 3, text: "Does your child walk well and seldom fall?" },
          { questionNumber: 4, text: "Does your child climb on an object such as a chair to reach something he wants (for example, to get a toy on a counter or to 'help' you in the kitchen)?" },
          { questionNumber: 5, text: "Does your child walk down stairs if you hold onto one of her hands? She may also hold onto the railing or wall. (You can look for this at a store, on a playground, or at home.)" },
          { questionNumber: 6, text: "When you show your child how to kick a large ball, does he try to kick the ball by moving his leg forward or by walking into it? (If your child already kicks a ball, mark 'yes' for this item.)" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "Does your child throw a small ball with a forward arm motion? (If he simply drops the ball, mark 'not yet' for this item.)" },
          { questionNumber: 2, text: "Does your child stack a small block or toy on top of another one? (You could also use spools of thread, small boxes, or toys that are about 1 inch in size.)" },
          { questionNumber: 3, text: "Does your child make a mark on the paper with the tip of a crayon (or pencil or pen) when trying to draw?" },
          { questionNumber: 4, text: "Does your child stack three small blocks or toys on top of each other by himself?" },
          { questionNumber: 5, text: "Does your child turn the pages of a book by himself? (He may turn more than one page at a time.)" },
          { questionNumber: 6, text: "Does your child get a spoon into her mouth right side up so that the food usually doesn't spill?" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "Does your child drop several small toys, one after another, into a container like a bowl or box? (You may show him how to do it.)" },
          { questionNumber: 2, text: "After you have shown your child how, does she try to get a small toy that is slightly out of reach by using a spoon, stick, or similar tool?" },
          { questionNumber: 3, text: "After a crumb or Cheerio is dropped into a small, clear bottle, does your child turn the bottle over to dump it out? (You may show him how.) (You can use a soda-pop bottle or a baby bottle.)" },
          { questionNumber: 4, text: "Without your showing her how, does your child scribble back and forth when you give her a crayon (or pencil or pen)?" },
          { questionNumber: 5, text: "After watching you draw a line from the top of the paper to the bottom with a crayon (or pencil or pen), does your child copy you by drawing a single line on the paper in any direction? (Mark 'not yet' if your child scribbles back and forth.)" },
          { questionNumber: 6, text: "After a crumb or Cheerio is dropped into a small, clear bottle, does your child turn the bottle upside down to dump out the crumb or Cheerio? (Do not show him how.)" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "While looking at herself in the mirror, does your child offer a toy to her own image?" },
          { questionNumber: 2, text: "Does your child play with a doll or stuffed animal by hugging it?" },
          { questionNumber: 3, text: "Does your child get your attention or try to show you something by pulling on your hand or clothes?" },
          { questionNumber: 4, text: "Does your child come to you when he needs help, such as with winding up a toy or unscrewing a lid from a jar?" },
          { questionNumber: 5, text: "Does your child drink from a cup or glass, putting it down again with little spilling?" },
          { questionNumber: 6, text: "Does your child copy the activities you do, such as wipe up a spill, sweep, shave, or comb hair?" }
        ]
      }
    ]
  },
  {
    ageInterval: 20,
    description: "For children ages 19 months 0 days through 20 months 30 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "Does your child imitate a two-word sentence? For example, when you say a two-word phrase, such as 'Mama eat,' 'Daddy play,' 'Go home,' or 'What's this?' does your child say both words back to you? (Mark 'yes' even if her words are difficult to understand.)" },
          { questionNumber: 2, text: "Does your child say eight or more words in addition to 'Mama' and 'Dada'?" },
          { questionNumber: 3, text: "Without your showing him, does your child point to the correct picture when you say, 'Show me the kitty,' or ask, 'Where is the dog?' (He needs to identify only one picture correctly.)" },
          { questionNumber: 4, text: "If you point to a picture of a ball (kitty, cup, hat, etc.) and ask your child, 'What is this?' does your child correctly name at least one picture?" },
          { questionNumber: 5, text: "Without your giving him clues by pointing or using gestures, can your child carry out at least three of these kinds of directions? (a. 'Put the toy on the table.' b. 'Close the door.' c. 'Bring me a towel.' d. 'Find your coat.' e. 'Take my hand.' f. 'Get your book.')" },
          { questionNumber: 6, text: "Does your child say two or three words that represent different ideas together, such as 'See dog,' 'Mommy come home,' or 'Kitty gone'? (Don't count word combinations that express one idea, such as 'bye-bye,' 'all gone,' 'all right,' and 'What's that?')" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "Does your child climb on an object such as a chair to reach something he wants (for example, to get a toy on a counter or to 'help' you in the kitchen)?" },
          { questionNumber: 2, text: "Does your child walk well and seldom fall?" },
          { questionNumber: 3, text: "Does your child walk down stairs if you hold onto one of her hands? She may also hold onto the railing or wall. (You can look for this at a store, on a playground, or at home.)" },
          { questionNumber: 4, text: "When you show your child how to kick a large ball, does he try to kick the ball by moving his leg forward or by walking into it? (If your child already kicks a ball, mark 'yes' for this item.)" },
          { questionNumber: 5, text: "Does your child run fairly well, stopping herself without bumping into things or falling?" },
          { questionNumber: 6, text: "Does your child walk either up or down at least two steps by himself? He may also hold onto the railing or wall." }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "Does your child make a mark on the paper with the tip of a crayon (or pencil or pen) when trying to draw?" },
          { questionNumber: 2, text: "Does your child stack three small blocks or toys on top of each other by herself? (You could also use spools of thread, small boxes, or toys that are about 1 inch in size.)" },
          { questionNumber: 3, text: "Does your child turn the pages of a book by himself? (He may turn more than one page at a time.)" },
          { questionNumber: 4, text: "Does your child get a spoon into her mouth right side up so that the food usually doesn't spill?" },
          { questionNumber: 5, text: "Does your child stack six small blocks or toys on top of each other by himself?" },
          { questionNumber: 6, text: "Does your child use a turning motion with her hand while trying to turn doorknobs, wind up toys, twist tops, or screw lids on and off jars?" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "Without your showing him how, does your child scribble back and forth when you give him a crayon (or pencil or pen)?" },
          { questionNumber: 2, text: "After watching you draw a line from the top of the paper to the bottom with a crayon (or pencil or pen), does your child copy you by drawing a single line on the paper in any direction? (Mark 'not yet' if your child scribbles back and forth.)" },
          { questionNumber: 3, text: "If you do any of the following gestures, does your child copy at least one of them? (a. Open and close your mouth. b. Blink your eyes. c. Pull on your earlobe. d. Pat your cheek.)" },
          { questionNumber: 4, text: "If you give your child a bottle, spoon, or pencil upside down, does she turn it right side up so that she can use it properly?" },
          { questionNumber: 5, text: "While your child watches, line up four objects like blocks or cars in a row. Does your child copy or imitate you and line up at least two blocks side by side? (You can also use spools of thread, small boxes, or other toys.)" },
          { questionNumber: 6, text: "If your child wants something he cannot reach, does he find a chair or box to stand on to reach it (for example, to get a toy on a counter or to 'help' you in the kitchen)?" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "Does your child feed herself with a spoon, even though she may spill some food?" },
          { questionNumber: 2, text: "Does your child get your attention or try to show you something by pulling on your hand or clothes?" },
          { questionNumber: 3, text: "Does your child drink from a cup or glass, putting it down again with little spilling?" },
          { questionNumber: 4, text: "Does your child copy the activities you do, such as wipe up a spill, sweep, shave, or comb hair?" },
          { questionNumber: 5, text: "When playing with either a stuffed animal or a doll, does your child pretend to rock it, feed it, change its diapers, put it to bed, and so forth?" },
          { questionNumber: 6, text: "Does your child eat with a fork?" }
        ]
      }
    ]
  },
  {
    ageInterval: 22,
    description: "For children ages 21 months 0 days through 22 months 30 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "If you point to a picture of a ball (kitty, cup, hat, etc.) and ask your child, 'What is this?' does your child correctly name at least one picture?" },
          { questionNumber: 2, text: "Without your giving him clues by pointing or using gestures, can your child carry out at least three of these kinds of directions? (a. 'Put the toy on the table.' b. 'Close the door.' c. 'Bring me a towel.' d. 'Find your coat.' e. 'Take my hand.' f. 'Get your book.')" },
          { questionNumber: 3, text: "When you ask your child to point to her nose, eyes, hair, feet, ears, and so forth, does she correctly point to at least seven body parts? (She can point to parts of herself, you, or a doll. Mark 'sometimes' if she correctly points to at least three different body parts.)" },
          { questionNumber: 4, text: "Does your child say 15 or more words in addition to 'Mama' and 'Dada'?" },
          { questionNumber: 5, text: "Does your child correctly use at least two words like 'me,' 'I,' 'mine,' and 'you'?" },
          { questionNumber: 6, text: "Does your child say two or three words that represent different ideas together, such as 'See dog,' 'Mommy come home,' or 'Kitty gone'? (Don't count word combinations that express one idea, such as 'bye-bye,' 'all gone,' 'all right,' and 'What's that?')" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "When you show your child how to kick a large ball, does he try to kick the ball by moving his leg forward or by walking into it? (If your child already kicks a ball, mark 'yes' for this item.)" },
          { questionNumber: 2, text: "Does your child run fairly well, stopping herself without bumping into things or falling?" },
          { questionNumber: 3, text: "Does your child walk down stairs if you hold onto one of his hands? He may also hold onto the railing or wall. (You can look for this at a store, on a playground, or at home.)" },
          { questionNumber: 4, text: "Does your child walk either up or down at least two steps by herself? She may hold onto the railing or wall." },
          { questionNumber: 5, text: "Does your child jump with both feet leaving the floor at the same time?" },
          { questionNumber: 6, text: "Without holding onto anything for support, does your child kick a ball by swinging his leg forward?" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "Does your child get a spoon into her mouth right side up so that the food usually doesn't spill?" },
          { questionNumber: 2, text: "Does your child stack six small blocks or toys on top of each other by himself? (You could also use spools of thread, small boxes, or toys that are about 1 inch in size.)" },
          { questionNumber: 3, text: "Does your child use a turning motion with her hand while trying to turn doorknobs, wind up toys, twist tops, or screw lids on and off jars?" },
          { questionNumber: 4, text: "Does your child turn the pages of a book by himself? (He may turn more than one page at a time.)" },
          { questionNumber: 5, text: "Does your child flip switches off and on?" },
          { questionNumber: 6, text: "Can your child string small items such as beads, macaroni, or pasta 'wagon wheels' onto a string or shoelace?" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "Without your showing her how, does your child scribble back and forth when you give her a crayon (or pencil or pen)?" },
          { questionNumber: 2, text: "While your child watches, line up four objects like blocks or cars in a row. Does your child copy or imitate you and line up at least two blocks side by side? (You can also use spools of thread, small boxes, or other toys.)" },
          { questionNumber: 3, text: "Does your child pretend objects are something else? For example, does your child hold a cup to his ear, pretending it is a telephone? Does he put a box on his head, pretending it is a hat? Does he use a block or small toy to stir food?" },
          { questionNumber: 4, text: "After watching you draw a line from the top of the paper to the bottom with a crayon (or pencil or pen), does your child copy you by drawing a single line on the paper in any direction? (Mark 'not yet' if your child scribbles back and forth.)" },
          { questionNumber: 5, text: "After a crumb or Cheerio is dropped into a small, clear bottle, does your child turn the bottle upside down to dump out the crumb or Cheerio? (Do not show her how.) (You can use a soda-pop bottle or a baby bottle.)" },
          { questionNumber: 6, text: "If you give your child a bottle, spoon, or pencil upside down, does he turn it right side up so that he can use it properly?" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "Does your child copy the activities you do, such as wipe up a spill, sweep, shave, or comb hair?" },
          { questionNumber: 2, text: "If you do any of the following gestures, does your child copy at least one of them? (a. Open and close your mouth. b. Blink your eyes. c. Pull on your earlobe. d. Pat your cheek.)" },
          { questionNumber: 3, text: "Does your child eat with a fork?" },
          { questionNumber: 4, text: "Does your child drink from a cup or glass, putting it down again with little spilling?" },
          { questionNumber: 5, text: "When playing with either a stuffed animal or a doll, does your child pretend to rock it, feed it, change its diapers, put it to bed, and so forth?" },
          { questionNumber: 6, text: "Does your child push a little wagon, stroller, or other toy on wheels, steering it around objects and backing out of corners if she cannot turn?" }
        ]
      }
    ]
  },
  {
    ageInterval: 24,
    description: "For children ages 23 months 0 days through 25 months 15 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "Without your showing him, does your child point to the correct picture when you say, 'Show me the kitty,' or ask, 'Where is the dog?' (She needs to identify only one picture correctly.)" },
          { questionNumber: 2, text: "Does your child imitate a two-word sentence? For example, when you say a two-word phrase, such as 'Mama eat,' 'Daddy play,' 'Go home,' or 'What's this?' does your child say both words back to you? (Mark 'yes' even if her words are difficult to understand.)" },
          { questionNumber: 3, text: "Without your giving him clues by pointing or using gestures, can your child carry out at least three of these kinds of directions? (a. 'Put the toy on the table.' b. 'Close the door.' c. 'Bring me a towel.' d. 'Find your coat.' e. 'Take my hand.' f. 'Get your book.')" },
          { questionNumber: 4, text: "If you point to a picture of a ball (kitty, cup, hat, etc.) and ask your child, 'What is this?' does your child correctly name at least one picture?" },
          { questionNumber: 5, text: "Does your child say two or three words that represent different ideas together, such as 'See dog,' 'Mommy come home,' or 'Kitty gone'? (Don't count word combinations that express one idea, such as 'bye-bye,' 'all gone,' 'all right,' and 'What's that?')" },
          { questionNumber: 6, text: "Does your child correctly use at least two words like 'me,' 'I,' 'mine,' and 'you'?" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "Does your child walk down stairs if you hold onto one of her hands? She may also hold onto the railing or wall. (You can look for this at a store, on a playground, or at home.)" },
          { questionNumber: 2, text: "When you show your child how to kick a large ball, does he try to kick the ball by moving his leg forward or by walking into it? (If your child already kicks a ball, mark 'yes' for this item.)" },
          { questionNumber: 3, text: "Does your child walk either up or down at least two steps by herself? She may hold onto the railing or wall." },
          { questionNumber: 4, text: "Does your child run fairly well, stopping herself without bumping into things or falling?" },
          { questionNumber: 5, text: "Does your child jump with both feet leaving the floor at the same time?" },
          { questionNumber: 6, text: "Without holding onto anything for support, does your child kick a ball by swinging his leg forward?" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "Does your child get a spoon into his mouth right side up so that the food usually doesn't spill?" },
          { questionNumber: 2, text: "Does your child turn the pages of a book by herself? (She may turn more than one page at a time.)" },
          { questionNumber: 3, text: "Does your child use a turning motion with his hand while trying to turn doorknobs, wind up toys, twist tops, or screw lids on and off jars?" },
          { questionNumber: 4, text: "Does your child flip switches off and on?" },
          { questionNumber: 5, text: "Does your child stack seven small blocks or toys on top of each other by herself? (You could also use spools of thread, small boxes, or toys that are about 1 inch in size.)" },
          { questionNumber: 6, text: "Can your child string small items such as beads, macaroni, or pasta 'wagon wheels' onto a string or shoelace?" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "After watching you draw a line from the top of the paper to the bottom with a crayon (or pencil or pen), does your child copy you by drawing a single line on the paper in any direction? (Mark 'not yet' if your child scribbles back and forth.)" },
          { questionNumber: 2, text: "After a crumb or Cheerio is dropped into a small, clear bottle, does your child turn the bottle upside down to dump out the crumb or Cheerio? (Do not show him how.) (You can use a soda-pop bottle or baby bottle.)" },
          { questionNumber: 3, text: "Does your child pretend objects are something else? For example, does your child hold a cup to her ear, pretending it is a telephone? Does she put a box on her head, pretending it is a hat? Does she use a block or small toy to stir food?" },
          { questionNumber: 4, text: "Does your child put things away where they belong? For example, does he know his toys belong on the toy shelf, his blanket goes on his bed, and dishes go in the kitchen?" },
          { questionNumber: 5, text: "If your child wants something she cannot reach, does she find a chair or box to stand on to reach it (for example, to get a toy on a counter or to 'help' you in the kitchen)?" },
          { questionNumber: 6, text: "While your child watches, line up four objects like blocks or cars in a row. Does your child copy or imitate you and line up four objects in a row? (You can also use spools of thread, small boxes, or other toys.)" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "Does your child drink from a cup or glass, putting it down again with little spilling?" },
          { questionNumber: 2, text: "Does your child copy the activities you do, such as wipe up a spill, sweep, shave, or comb hair?" },
          { questionNumber: 3, text: "Does your child eat with a fork?" },
          { questionNumber: 4, text: "When playing with either a stuffed animal or a doll, does your child pretend to rock it, feed it, change its diapers, put it to bed, and so forth?" },
          { questionNumber: 5, text: "Does your child push a little wagon, stroller, or other toy on wheels, steering it around objects and backing out of corners if he cannot turn?" },
          { questionNumber: 6, text: "Does your child call herself 'I' or 'me' more often than her own name? For example, 'I do it,' more often than 'Juanita do it.'" }
        ]
      }
    ]
  },
  {
    ageInterval: 27,
    description: "For children ages 25 months 16 days through 28 months 15 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "Without your giving him clues by pointing or using gestures, can your child carry out at least three of these kinds of directions? (a. 'Put the toy on the table.' b. 'Close the door.' c. 'Bring me a towel.' d. 'Find your coat.' e. 'Take my hand.' f. 'Get your book.')" },
          { questionNumber: 2, text: "If you point to a picture of a ball (kitty, cup, hat, etc.) and ask your child, 'What is this?' does your child correctly name at least one picture?" },
          { questionNumber: 3, text: "When you ask her to point to her nose, eyes, hair, feet, ears, and so forth, does your child correctly point to at least seven body parts? (She can point to parts of herself, you, or a doll. Mark 'sometimes' if she correctly points to at least three different body parts.)" },
          { questionNumber: 4, text: "Does your child correctly use at least two words like 'me,' 'I,' 'mine,' and 'you'?" },
          { questionNumber: 5, text: "Does your child make sentences that are three or four words long?" },
          { questionNumber: 6, text: "Without giving your child help by pointing or using gestures, ask him to 'put the book on the table' and 'put the shoe under the chair.' Does your child carry out both of these directions correctly?" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "Does your child walk either up or down at least two steps by himself? He may hold onto the railing or wall. (You can look for this at a store, on a playground, or at home.)" },
          { questionNumber: 2, text: "Does your child run fairly well, stopping herself without bumping into things or falling?" },
          { questionNumber: 3, text: "Does your child jump with both feet leaving the floor at the same time?" },
          { questionNumber: 4, text: "Without holding onto anything for support, does your child kick a ball by swinging his leg forward?" },
          { questionNumber: 5, text: "Does your child jump forward at least 3 inches with both feet leaving the ground at the same time?" },
          { questionNumber: 6, text: "Does your child walk up stairs, using only one foot on each stair? (The left foot is on one step, and the right foot is on the next.) She may hold onto the railing or wall." }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "Does your child use a turning motion with her hand while trying to turn doorknobs, wind up toys, twist tops, or screw lids on and off jars?" },
          { questionNumber: 2, text: "Does your child flip switches off and on?" },
          { questionNumber: 3, text: "After your child watches you draw a line from the top of the paper to the bottom with a pencil, crayon, or pen, ask him to make a line like yours. Do not let your child trace your line. Does your child copy you by drawing a single line in a vertical direction?" },
          { questionNumber: 4, text: "Does your child stack seven small blocks or toys on top of each other by herself? (You could also use spools of thread, small boxes, or toys that are about 1 inch in size.)" },
          { questionNumber: 5, text: "Can your child string small items such as beads, macaroni, or pasta 'wagon wheels' onto a string or shoelace?" },
          { questionNumber: 6, text: "After your child watches you draw a line from one side of the paper to the other side, ask her to make a line like yours. Do not let your child trace your line. Does your child copy you by drawing a single line in a horizontal direction?" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "Does your child pretend objects are something else? For example, does your child hold a cup to his ear, pretending it is a telephone? Does he put a box on her head, pretending it is a hat? Does he use a block or small toy to stir food?" },
          { questionNumber: 2, text: "Does your child put things away where they belong? For example, does she know her toys belong on the toy shelf, her blanket goes on his bed, and dishes go in the kitchen?" },
          { questionNumber: 3, text: "When looking in the mirror, ask 'Where is _______?' (Use your child's name.) Does your child point to his image in the mirror?" },
          { questionNumber: 4, text: "If your child wants something she cannot reach, does she find a chair or box to stand on to reach it (for example, to get a toy on a counter or to 'help' you in the kitchen)?" },
          { questionNumber: 5, text: "While your child watches, line up four objects like blocks or cars in a row. Does your child copy or imitate you and line up four objects in a row? (You can also use spools of thread, small boxes, or other toys.)" },
          { questionNumber: 6, text: "When you point to the figure and ask your child, 'What is this?' does your child say a word that means a person or something similar? (Mark 'yes' for responses like 'snowman,' 'boy,' 'man,' 'girl,' 'Daddy,' 'spaceman,' and 'monkey.')" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "If you do any of the following gestures, does your child copy at least one of them? (a. Open and close your mouth. b. Blink your eyes. c. Pull on your earlobe. d. Pat your cheek.)" },
          { questionNumber: 2, text: "Does your child eat with a fork?" },
          { questionNumber: 3, text: "When playing with either a stuffed animal or a doll, does your child pretend to rock it, feed it, change its diapers, put it to bed, and so forth?" },
          { questionNumber: 4, text: "Does your child push a little wagon, stroller, or other toy on wheels, steering it around objects and backing out of corners if he cannot turn?" },
          { questionNumber: 5, text: "Does your child call herself 'I' or 'me' more often than her own name? For example, 'I do it' more often than 'Juanita do it.'" },
          { questionNumber: 6, text: "Does your child put on a coat, jacket, or shirt by himself?" }
        ]
      }
    ]
  },
  {
    ageInterval: 30,
    description: "For children ages 28 months 16 days through 31 months 15 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "If you point to a picture of a ball (kitty, cup, hat, etc.) and ask your child, 'What is this?' does your child correctly name at least one picture?" },
          { questionNumber: 2, text: "Without your giving him clues by pointing or using gestures, can your child carry out at least three of these kinds of directions? (a. 'Put the toy on the table.' b. 'Close the door.' c. 'Bring me a towel.' d. 'Find your coat.' e. 'Take my hand.' f. 'Get your book.')" },
          { questionNumber: 3, text: "When you ask your child to point to her nose, eyes, hair, feet, ears, and so forth, does she correctly point to at least seven body parts? (She can point to parts of herself, you, or a doll. Mark 'sometimes' if she correctly points to at least three different body parts.)" },
          { questionNumber: 4, text: "Does your child make sentences that are three or four words long?" },
          { questionNumber: 5, text: "Without giving your child help by pointing or using gestures, ask him to 'put the book on the table' and 'put the shoe under the chair.' Does your child carry out both of these directions correctly?" },
          { questionNumber: 6, text: "When looking at a picture book, does your child tell you what is happening or what action is taking place in the picture (for example, 'barking,' 'running,' 'eating,' or 'crying')? You may ask, 'What is the dog (or boy) doing?'" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "Does your child run fairly well, stopping herself without bumping into things or falling?" },
          { questionNumber: 2, text: "Does your child walk either up or down at least two steps by himself? He may hold onto the railing or wall. (You can look for this at a store, on a playground, or at home.)" },
          { questionNumber: 3, text: "Without holding onto anything for support, does your child kick a ball by swinging his leg forward?" },
          { questionNumber: 4, text: "Does your child jump with both feet leaving the floor at the same time?" },
          { questionNumber: 5, text: "Does your child walk up stairs, using only one foot on each stair? (The left foot is on one step, and the right foot is on the next.) She may hold onto the railing or wall." },
          { questionNumber: 6, text: "Does your child stand on one foot for about 1 second without holding onto anything?" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "Does your child use a turning motion with her hand while trying to turn doorknobs, wind up toys, twist tops, or screw lids on and off jars?" },
          { questionNumber: 2, text: "After your child watches you draw a line from the top of the paper to the bottom with a pencil, crayon, or pen, ask him to make a line like yours. Do not let your child trace your line. Does your child copy you by drawing a single line in a vertical direction?" },
          { questionNumber: 3, text: "Can your child string small items such as beads, macaroni, or pasta 'wagon wheels' onto a string or shoelace?" },
          { questionNumber: 4, text: "After your child watches you draw a line from one side of the paper to the other side, ask her to make a line like yours. Do not let your child trace your line. Does your child copy you by drawing a single line in a horizontal direction?" },
          { questionNumber: 5, text: "After your child watches you draw a single circle, ask him to make a circle like yours. Do not let him trace your circle. Does your child copy you by drawing a circle?" },
          { questionNumber: 6, text: "Does your child turn pages in a book, one page at a time?" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "When looking in the mirror, ask, 'Where is _______?' (Use your child's name.) Does your child point to her image in the mirror?" },
          { questionNumber: 2, text: "If your child wants something he cannot reach, does he find a chair or box to stand on to reach it (for example, to get a toy on a counter or to 'help' you in the kitchen)?" },
          { questionNumber: 3, text: "While your child watches, line up four objects like blocks or cars in a row. Does your child copy or imitate you and line up four objects in a row? (You can also use spools of thread, small boxes, or other toys.)" },
          { questionNumber: 4, text: "When you point to the figure and ask your child, 'What is this?' does your child say a word that means a person or something similar? (Mark 'yes' for responses like 'snowman,' 'boy,' 'man,' 'girl,' 'Daddy,' 'spaceman,' and 'monkey.')" },
          { questionNumber: 5, text: "When you say, 'Say `seven three,`' does your child repeat just the two numbers in the same order? Do not repeat the numbers. If necessary, try another pair of numbers and say, 'Say `eight two.`' Your child must repeat just one series of two numbers for you to answer 'yes' to this question." },
          { questionNumber: 6, text: "After your child draws a 'picture,' even a simple scribble, does she tell you what she drew? (You may say, 'Tell me about your picture,' or ask, 'What is this?' to prompt her.)" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "If you do any of the following gestures, does your child copy at least one of them? (a. Open and close your mouth. b. Blink your eyes. c. Pull on your earlobe. d. Pat your cheek.)" },
          { questionNumber: 2, text: "Does your child use a spoon to feed himself with little spilling?" },
          { questionNumber: 3, text: "Does your child push a little wagon, stroller, or other toy on wheels, steering it around objects and backing out of corners if she cannot turn?" },
          { questionNumber: 4, text: "Does your child put on a coat, jacket, or shirt by himself?" },
          { questionNumber: 5, text: "After you put on loose-fitting pants around her feet, does your child pull them completely up to her waist?" },
          { questionNumber: 6, text: "When your child is looking in a mirror and you ask, 'Who is in the mirror?' does he say either 'me' or his own name?" }
        ]
      }
    ]
  },
  {
    ageInterval: 33,
    description: "For children ages 31 months 16 days through 34 months 15 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "When you ask your child to point to his nose, eyes, hair, feet, ears, and so forth, does he correctly point to at least seven body parts? (He can point to parts of himself, you, or a doll. Mark 'sometimes' if he correctly points to at least three different body parts.)" },
          { questionNumber: 2, text: "Does your child make sentences that are three or four words long?" },
          { questionNumber: 3, text: "Without giving your child help by pointing or using gestures, ask her to 'put the book on the table' and 'put the shoe under the chair.' Does your child carry out both of these directions correctly?" },
          { questionNumber: 4, text: "When looking at a picture book, does your child tell you what is happening or what action is taking place in the picture (for example, 'barking,' 'running,' 'eating,' or 'crying'). You may ask, 'What is the dog (or boy) doing?'" },
          { questionNumber: 5, text: "Show your child how a zipper on a coat moves up and down, and say, 'See, this goes up and down.' Put the zipper to the middle, and ask your child to move the zipper down. Return the zipper to the middle, and ask your child to move the zipper up. Do this several times, placing the zipper in the middle before asking your child to move it up or down. Does your child consistently move the zipper up when you say 'up' and down when you say 'down'?" },
          { questionNumber: 6, text: "When you ask, 'What is your name?' does your child say his first name or nickname?" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "Does your child run fairly well, stopping herself without bumping into things or falling?" },
          { questionNumber: 2, text: "Without holding onto anything for support, does your child kick a ball by swinging his leg forward?" },
          { questionNumber: 3, text: "Does your child jump with both feet leaving the floor at the same time?" },
          { questionNumber: 4, text: "Does your child walk up stairs, using only one foot on each stair? (The left foot is on one step, and the right foot is on the next.) She may hold onto the railing or wall. (You can look for this at a store, on a playground, or at home.)" },
          { questionNumber: 5, text: "Does your child stand on one foot for about 1 second without holding onto anything?" },
          { questionNumber: 6, text: "While standing, does your child throw a ball overhand by raising his arm to shoulder height and throwing the ball forward? (Dropping the ball or throwing the ball underhand should be scored as 'not yet.')" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "After your child watches you draw a line from the top of the paper to the bottom with a pencil, crayon, or pen, ask her to make a line like yours. Do not let your child trace your line. Does your child copy you by drawing a single line in a vertical direction?" },
          { questionNumber: 2, text: "Can your child string small items such as beads, macaroni, or pasta 'wagon wheels' onto a string or shoelace?" },
          { questionNumber: 3, text: "After your child watches you draw a line from one side of the paper to the other side, ask him to make a line like yours. Do not let your child trace your line. Does your child copy you by drawing a single line in a horizontal direction?" },
          { questionNumber: 4, text: "After your child watches you draw a single circle, ask her to make a circle like yours. Do not let her trace your circle. Does your child copy you by drawing a circle?" },
          { questionNumber: 5, text: "Does your child turn pages in a book, one page at a time?" },
          { questionNumber: 6, text: "Does your child try to cut paper with child-safe scissors? He does not need to cut the paper but must get the blades to open and close while holding the paper with the other hand. (You may show your child how to use scissors. Carefully watch your child's use of scissors for safety reasons.)" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "When looking in the mirror, ask, 'Where is _____?' (Use your child's name.) Does your child point to her image in the mirror?" },
          { questionNumber: 2, text: "While your child watches, line up four objects like blocks or cars in a row. Does your child copy or imitate you and line up four objects in a row? (You can also use spools of thread, small boxes, or other toys.)" },
          { questionNumber: 3, text: "If your child wants something he cannot reach, does he find a chair or box to stand on to reach it (for example, to get a toy on a counter or to 'help' you in the kitchen)?" },
          { questionNumber: 4, text: "When you point to the figure and ask your child, 'What is this?' does your child say a word that means a person or something similar? (Mark 'yes' for responses like 'snowman,' 'boy,' 'man,' 'girl,' 'Daddy,' 'spaceman,' and 'monkey.')" },
          { questionNumber: 5, text: "When you say, 'Say `seven three,`' does your child repeat just the two numbers in the same order? Do not repeat the numbers. If necessary, try another pair of numbers and say, 'Say `eight two.`' (Your child must repeat just one series of two numbers for you to answer 'yes' to this question.)" },
          { questionNumber: 6, text: "After your child draws a 'picture,' even a simple scribble, does she tell you what she drew? (You may say, 'Tell me about your picture,' or ask, 'What is this?' to prompt her.)" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "Does your child use a spoon to feed herself with little spilling?" },
          { questionNumber: 2, text: "Does your child push a little wagon, stroller, or other toy on wheels, steering it around objects and backing out of corners if he cannot turn?" },
          { questionNumber: 3, text: "Does your child put on a coat, jacket, or shirt by herself?" },
          { questionNumber: 4, text: "After you put on loose-fitting pants around his feet, does your child pull them completely up to his waist?" },
          { questionNumber: 5, text: "When your child is looking in a mirror and you ask, 'Who is in the mirror?' does she say either 'me' or her own name?" },
          { questionNumber: 6, text: "Using these exact words, ask your child, 'Are you a girl or a boy?' Does your child answer correctly?" }
        ]
      }
    ]
  },
  {
    ageInterval: 36,
    description: "For children ages 34 months 16 days through 38 months 30 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "When you ask your child to point to her nose, eyes, hair, feet, ears, and so forth, does she correctly point to at least seven body parts? (She can point to parts of herself, you, or a doll. Mark 'sometimes' if she correctly points to at least three different body parts.)" },
          { questionNumber: 2, text: "Does your child make sentences that are three or four words long?" },
          { questionNumber: 3, text: "Without giving your child help by pointing or using gestures, ask him to 'put the book on the table' and 'put the shoe under the chair.' Does your child carry out both of these directions correctly?" },
          { questionNumber: 4, text: "When looking at a picture book, does your child tell you what is happening or what action is taking place in the picture (for example, 'barking,' 'running,' 'eating,' or 'crying')? You may ask, 'What is the dog (or boy) doing?'" },
          { questionNumber: 5, text: "Show your child how a zipper on a coat moves up and down, and say, 'See, this goes up and down.' Put the zipper to the middle and ask your child to move the zipper down. Return the zipper to the middle and ask your child to move the zipper up. Do this several times, placing the zipper in the middle before asking your child to move it up or down. Does your child consistently move the zipper up when you say 'up' and down when you say 'down'?" },
          { questionNumber: 6, text: "When you ask, 'What is your name?' does your child say both her first and last names?" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "Without holding onto anything for support, does your child kick a ball by swinging his leg forward?" },
          { questionNumber: 2, text: "Does your child jump with both feet leaving the floor at the same time?" },
          { questionNumber: 3, text: "Does your child walk up stairs, using only one foot on each stair? (The left foot is on one step, and the right foot is on the next.) She may hold onto the railing or wall. (You can look for this at a store, on a playground, or at home.)" },
          { questionNumber: 4, text: "Does your child stand on one foot for about 1 second without holding onto anything?" },
          { questionNumber: 5, text: "While standing, does your child throw a ball overhand by raising his arm to shoulder height and throwing the ball forward? (Dropping the ball or throwing the ball underhand should be scored as 'not yet.')" },
          { questionNumber: 6, text: "Does your child jump forward at least 6 inches with both feet leaving the ground at the same time?" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "After your child watches you draw a line from the top of the paper to the bottom with a pencil, crayon, or pen, ask her to make a line like yours. Do not let your child trace your line. Does your child copy you by drawing a single line in a vertical direction?" },
          { questionNumber: 2, text: "Can your child string small items such as beads, macaroni, or pasta 'wagon wheels' onto a string or shoelace?" },
          { questionNumber: 3, text: "After your child watches you draw a single circle, ask him to make a circle like yours. Do not let him trace your circle. Does your child copy you by drawing a circle?" },
          { questionNumber: 4, text: "After your child watches you draw a line from one side of the paper to the other side, ask her to make a line like yours. Do not let your child trace your line. Does your child copy you by drawing a single line in a horizontal direction?" },
          { questionNumber: 5, text: "Does your child try to cut paper with child-safe scissors? He does not need to cut the paper but must get the blades to open and close while holding the paper with the other hand. (You may show your child how to use scissors. Carefully watch your child's use of scissors for safety reasons.)" },
          { questionNumber: 6, text: "When drawing, does your child hold a pencil, crayon, or pen between her fingers and thumb like an adult does?" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "While your child watches, line up four objects like blocks or cars in a row. Does your child copy or imitate you and line up four objects in a row? (You can also use spools of thread, small boxes, or other toys.)" },
          { questionNumber: 2, text: "If your child wants something he cannot reach, does he find a chair or box to stand on to reach it (for example, to get a toy on a counter or to 'help' you in the kitchen)?" },
          { questionNumber: 3, text: "When you point to the figure and ask your child, 'What is this?' does your child say a word that means a person or something similar? (Mark 'yes' for responses like 'snowman,' 'boy,' 'man,' 'girl,' 'Daddy,' 'spaceman,' and 'monkey.')" },
          { questionNumber: 4, text: "When you say, 'Say `seven three,`' does your child repeat just the two numbers in the same order? Do not repeat the numbers. If necessary, try another pair of numbers and say, 'Say `eight two.`' (Your child must repeat just one series of two numbers for you to answer 'yes' to this question.)" },
          { questionNumber: 5, text: "Show your child how to make a bridge with blocks, boxes, or cans, like the example. Does your child copy you by making one like it?" },
          { questionNumber: 6, text: "When you say, 'Say `five eight three,`' does your child repeat just the three numbers in the same order? Do not repeat the numbers. If necessary, try another series of numbers and say, 'Say `six nine two.`' (Your child must repeat just one series of three numbers for you to answer 'yes' to this question.)" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "Does your child use a spoon to feed herself with little spilling?" },
          { questionNumber: 2, text: "Does your child push a little wagon, stroller, or toy on wheels, steering it around objects and backing out of corners if he cannot turn?" },
          { questionNumber: 3, text: "When your child is looking in a mirror and you ask, 'Who is in the mirror?' does she say either 'me' or her own name?" },
          { questionNumber: 4, text: "Does your child put on a coat, jacket, or shirt by himself?" },
          { questionNumber: 5, text: "Using these exact words, ask your child, 'Are you a girl or a boy?' Does your child answer correctly?" },
          { questionNumber: 6, text: "Does your child take turns by waiting while another child or adult takes a turn?" }
        ]
      }
    ]
  },
  {
    ageInterval: 42,
    description: "For children ages 39 months 0 days through 44 months 30 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "Without giving your child help by pointing or using gestures, ask him to 'put the book on the table' and 'put the shoe under the chair.' Does your child carry out both of these directions correctly?" },
          { questionNumber: 2, text: "When looking at a picture book, does your child tell you what is happening or what action is taking place in the picture (for example, 'barking,' 'running,' 'eating,' or 'crying')? You may ask, 'What is the dog (or boy) doing?'" },
          { questionNumber: 3, text: "Show your child how a zipper on a coat moves up and down, and say, 'See, this goes up and down.' Put the zipper to the middle, and ask your child to move the zipper down. Return the zipper to the middle, and ask your child to move the zipper up. Do this several times, placing the zipper in the middle before asking your child to move it up or down. Does your child consistently move the zipper up when you say 'up' and down when you say 'down'?" },
          { questionNumber: 4, text: "When you ask, 'What is your name?' does your child say both her first and last names?" },
          { questionNumber: 5, text: "Without your giving help by pointing or repeating directions, does your child follow three directions that are unrelated to one another? Give all three directions before your child starts. For example, you may ask your child, 'Clap your hands, walk to the door, and sit down,' or 'Give me the pen, open the book, and stand up.'" },
          { questionNumber: 6, text: "Does your child use all of the words in a sentence (for example, 'a,' 'the,' 'am,' 'is,' and 'are') to make complete sentences, such as 'I am going to the park,' or 'Is there a toy to play with?' or 'Are you coming, too?'" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "Does your child walk up stairs, using only one foot on each stair? (The left foot is on one step, and the right foot is on the next.) He may hold onto the railing or wall. (You can look for this at a store, on a playground, or at home.)" },
          { questionNumber: 2, text: "Does your child stand on one foot for about 1 second without holding onto anything?" },
          { questionNumber: 3, text: "While standing, does your child throw a ball overhand by raising his arm to shoulder height and throwing the ball forward? (Dropping the ball or throwing the ball underhand should be scored as 'not yet.')" },
          { questionNumber: 4, text: "Does your child jump forward at least 6 inches with both feet leaving the ground at the same time?" },
          { questionNumber: 5, text: "Does your child catch a large ball with both hands? (You should stand about 5 feet away and give your child two or three tries before you mark the answer.)" },
          { questionNumber: 6, text: "Does your child climb the rungs of a ladder of a playground slide and slide down without help?" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "After your child watches you draw a single circle with a pencil, crayon, or pen, ask him to make a circle like yours. Do not let him trace your circle. Does your child copy you by drawing a circle?" },
          { questionNumber: 2, text: "After your child watches you draw a line from one side of the paper to the other side, ask her to make a line like yours. Do not let your child trace your line. Does your child copy you by drawing a single line in a horizontal direction?" },
          { questionNumber: 3, text: "Does your child try to cut paper with child-safe scissors? He does not need to cut the paper but must get the blades to open and close while holding the paper with the other hand. (You may show your child how to use scissors. Carefully watch your child's use of scissors for safety reasons.)" },
          { questionNumber: 4, text: "When drawing, does your child hold a pencil, crayon, or pen between her fingers and thumb like an adult does?" },
          { questionNumber: 5, text: "Does your child put together a five- to seven-piece interlocking puzzle? (If one is not available, take a full-page picture from a magazine or catalog and cut it into six pieces. Does your child put it back together correctly?)" },
          { questionNumber: 6, text: "Using the shape at right to look at, does your child copy it onto a large piece of paper using a pencil, crayon, or pen, without tracing? (Your child's drawing should look like the design of the shape, except it may be different in size.)" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "When you point to the figure and ask your child, 'What is this?' does your child say a word that means a person or something similar? (Mark 'yes' for responses like 'snowman,' 'boy,' 'man,' 'girl,' 'Daddy,' 'spaceman,' and 'monkey.')" },
          { questionNumber: 2, text: "When you say, 'Say `seven three,`' does your child repeat just the two numbers in the same order? Do not repeat the numbers. If necessary, try another pair of numbers and say, 'Say `eight two.`' (Your child must repeat just one series of two numbers for you to answer 'yes' to this question.)" },
          { questionNumber: 3, text: "Show your child how to make a bridge with blocks, boxes, or cans, like the example. Does your child copy you by making one like it?" },
          { questionNumber: 4, text: "When you say, 'Say `five eight three,`' does your child repeat just the three numbers in the same order? Do not repeat the numbers. If necessary, try another series of numbers and say, 'Say `six nine two.`' (Your child must repeat just one series of three numbers for you to answer 'yes' to this question.)" },
          { questionNumber: 5, text: "When asked, 'Which circle is the smallest?' does your child point to the smallest circle? (Ask this question without providing help by pointing, gesturing, or looking at the smallest circle.)" },
          { questionNumber: 6, text: "Does your child dress up and 'play-act,' pretending to be someone or something else? For example, your child may dress up in different clothes and pretend to be a mommy, daddy, brother or sister, or an imaginary animal or figure." }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "When he is looking in a mirror and you ask, 'Who is in the mirror?' does your child say either 'me' or his own name?" },
          { questionNumber: 2, text: "Does your child put on a coat, jacket, or shirt by herself?" },
          { questionNumber: 3, text: "Using these exact words, ask your child, 'Are you a girl or a boy?' Does your child answer correctly?" },
          { questionNumber: 4, text: "Does your child take turns by waiting while another child or adult takes a turn?" },
          { questionNumber: 5, text: "Does your child serve himself, taking food from one container to another using utensils? For example, does your child use a large spoon to scoop applesauce from a jar into a bowl?" },
          { questionNumber: 6, text: "Does your child wash his hands using soap and water and dry off with a towel without help?" }
        ]
      }
    ]
  },
  {
    ageInterval: 48,
    description: "For children ages 45 months 0 days through 50 months 30 days",
    domains: [
      {
        name: "Communication",
        questions: [
          { questionNumber: 1, text: "Does your child name at least three items from a common category? For example, if you say to your child, 'Tell me some things that you can eat,' does your child answer with something like 'cookies, eggs, and cereal'? Or if you say, 'Tell me the names of some animals,' does your child answer with something like 'cow, dog, and elephant'?" },
          { questionNumber: 2, text: "Does your child answer the following questions? (Mark 'sometimes' if your child answers only one question.) 'What do you do when you are hungry?' (Acceptable answers include 'get food,' 'eat,' 'ask for something to eat,' and 'have a snack.') 'What do you do when you are tired?' (Acceptable answers include 'take a nap,' 'rest,' 'go to sleep,' 'go to bed,' 'lie down,' and 'sit down.')" },
          { questionNumber: 3, text: "Does your child tell you at least two things about common objects? For example, if you say to your child, 'Tell me about your ball,' does she say something like, 'It's round. I throw it. It's big'?" },
          { questionNumber: 4, text: "Does your child use endings of words, such as '-s,' '-ed,' and '-ing'? For example, does your child say things like, 'I see two cats,' 'I am playing,' or 'I kicked the ball'?" },
          { questionNumber: 5, text: "Without your giving help by pointing or repeating, does your child follow three directions that are unrelated to one another? Give all three directions before your child starts. For example, you may ask your child, 'Clap your hands, walk to the door, and sit down,' or 'Give me the pen, open the book, and stand up.'" },
          { questionNumber: 6, text: "Does your child use all of the words in a sentence (for example, 'a,' 'the,' 'am,' 'is,' and 'are') to make complete sentences, such as 'I am going to the park,' or 'Is there a toy to play with?' or 'Are you coming, too?'" }
        ]
      },
      {
        name: "Gross Motor",
        questions: [
          { questionNumber: 1, text: "Does your child catch a large ball with both hands? (You should stand about 5 feet away and give your child two or three tries before you mark the answer.)" },
          { questionNumber: 2, text: "Does your child climb the rungs of a ladder of a playground slide and slide down without help?" },
          { questionNumber: 3, text: "While standing, does your child throw a ball overhand in the direction of a person standing at least 6 feet away? To throw overhand, your child must raise his arm to shoulder height and throw the ball forward. (Dropping the ball or throwing the ball underhand should be scored as 'not yet.')" },
          { questionNumber: 4, text: "Does your child hop up and down on either the right or left foot at least one time without losing her balance or falling?" },
          { questionNumber: 5, text: "Does your child jump forward a distance of 20 inches from a standing position, starting with his feet together?" },
          { questionNumber: 6, text: "Without holding onto anything, does your child stand on one foot for at least 5 seconds without losing her balance and putting her foot down? (You may give your child two or three tries before you mark the answer.)" }
        ]
      },
      {
        name: "Fine Motor",
        questions: [
          { questionNumber: 1, text: "Does your child put together a five- to seven-piece interlocking puzzle? (If one is not available, take a full-page picture from a magazine or catalog and cut it into six pieces. Does your child put it back together correctly?)" },
          { questionNumber: 2, text: "Using child-safe scissors, does your child cut a paper in half on a more or less straight line, making the blades go up and down? (Carefully watch your child's use of scissors for safety reasons.)" },
          { questionNumber: 3, text: "Using the shapes below to look at, does your child copy at least three shapes onto a large piece of paper using a pencil, crayon, or pen, without tracing? (Your child's drawings should look similar to the design of the shapes below, but they may be different in size.)" },
          { questionNumber: 4, text: "Does your child unbutton one or more buttons? (Your child may use his own clothing or a doll's clothing.)" },
          { questionNumber: 5, text: "Does your child draw pictures of people that have at least three of the following features: head, eyes, nose, mouth, neck, hair, trunk, arms, hands, legs, or feet?" },
          { questionNumber: 6, text: "Does your child color mostly within the lines in a coloring book or within the lines of a 2-inch circle that you draw? (Your child should not go more than 1/4 inch outside the lines on most of the picture.)" }
        ]
      },
      {
        name: "Problem Solving",
        questions: [
          { questionNumber: 1, text: "When you say, 'Say `five eight three,`' does your child repeat just the three numbers in the same order? Do not repeat the numbers. If necessary, try another series of numbers and say, 'Say `six nine two.`' (Your child must repeat just one series of three numbers to answer 'yes' to this question.)" },
          { questionNumber: 2, text: "When asked, 'Which circle is the smallest?' does your child point to the smallest circle? (Ask this question without providing help by pointing, gesturing, or looking at the smallest circle.)" },
          { questionNumber: 3, text: "Without your giving help by pointing, does your child follow three different directions using the words 'under,' 'between,' and 'middle'? For example, ask your child to put the shoe 'under the couch.' Then ask her to put the ball 'between the chairs' and the book 'in the middle of the table.'" },
          { questionNumber: 4, text: "When shown objects and asked, 'What color is this?' does your child name five different colors, like red, blue, yellow, orange, black, white, or pink? (Mark 'yes' only if your child answers the question correctly using five colors.)" },
          { questionNumber: 5, text: "Does your child dress up and 'play-act,' pretending to be someone or something else? For example, your child may dress up in different clothes and pretend to be a mommy, daddy, brother, sister, or an imaginary animal or figure." },
          { questionNumber: 6, text: "If you place five objects in front of your child, can he count them by saying, 'one, two, three, four, five,' in order? (Ask this question without providing help by pointing, gesturing, or naming.)" }
        ]
      },
      {
        name: "Personal-Social",
        questions: [
          { questionNumber: 1, text: "Does your child serve herself, taking food from one container to another using utensils? For example, does your child use a large spoon to scoop applesauce from a jar into a bowl?" },
          { questionNumber: 2, text: "Does your child tell you at least four of the following? Please mark the items your child knows. (a. First name b. Age c. City she lives in d. Last name e. Boy or girl f. Telephone number)" },
          { questionNumber: 3, text: "Does your child wash his hands using soap and water and dry off with a towel without help?" },
          { questionNumber: 4, text: "Does your child tell you the names of two or more playmates, not including brothers and sisters? (Ask this question without providing help by suggesting names of playmates or friends.)" },
          { questionNumber: 5, text: "Does your child brush her teeth by putting toothpaste on the toothbrush and brushing all of her teeth without help? (You may still need to check and rebrush your child's teeth.)" },
          { questionNumber: 6, text: "Does your child dress or undress himself without help (except for snaps, buttons, and zippers)?" }
        ]
      }
    ]
  }
];

module.exports = asqData;