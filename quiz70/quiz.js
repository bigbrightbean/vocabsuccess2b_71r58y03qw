// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Given the current economic climate, the __________ of launching a new business is uncertain.",
    chinese_question: "鉴于当前的经济形势，启动新业务的 __________ 是不确定的。",
    answers: [
        { option: "A", answer: "feasibility", chinese_answer: "可行性", chinese_romanization: "kěxíng xìng" },
        { option: "B", answer: "futility", chinese_answer: "无用", chinese_romanization: "wúyòng" },
        { option: "C", answer: "absurdity", chinese_answer: "荒谬", chinese_romanization: "huāngmiù" },
        { option: "D", answer: "impracticality", chinese_answer: "不切实际", chinese_romanization: "bù qiè shíjì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'feasibility' figuratively means the practicality or possibility of something being accomplished." +
        "<br><br>" +
        "(B) 'futility' means pointlessness or uselessness." +
        "<br><br>" +
        "(C) 'absurdity' means the quality or state of being ridiculous or wildly unreasonable." +
        "<br><br>" +
        "(D) 'impracticality' means the state of being impractical or unrealistic.",
    chinese_explanation: "(A) '可行性' 在此语境下意指某事得以完成的实用性或可能性。" +
        "<br><br>" +
        "(B) '无用' 意味着无意义或无用。" +
        "<br><br>" +
        "(C) '荒谬' 意味着荒谬或极不合理的质量或状态。" +
        "<br><br>" +
        "(D) '不切实际' 意味着不切实际或不现实的状态。"
    },
    {
        id: 2,
    question: "A large __________ of the population supported the new policy.",
    chinese_question: "大 __________ 人口支持新政策。",
    answers: [
        { option: "A", answer: "portion", chinese_answer: "部分", chinese_romanization: "bùfen" },
        { option: "B", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàngài" },
        { option: "C", answer: "requirement", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
        { option: "D", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'portion' means a part of a whole." +
        "<br><br>" +
        "(B) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." +
        "<br><br>" +
        "(C) 'requirement' means a thing that is needed or wanted." +
        "<br><br>" +
        "(D) 'challenge' means a call to take part in a contest or competition, especially a duel.",
    chinese_explanation: "(A) '部分' 意味着整体的一部分。" +
        "<br><br>" +
        "(B) '障碍' 意味着挡住某人去路或阻止或妨碍进展的事物。" +
        "<br><br>" +
        "(C) '要求' 意味着需要或想要的东西。" +
        "<br><br>" +
        "(D) '挑战' 意味着呼吁参加比赛或竞争，尤指决斗。"
    },
    {
        id: 3,
        question: "Her __________ about the world made her an easy victim for those looking to exploit her kindness.",
        chinese_question: "她对世界的 __________ 使她很容易成为那些想利用她的善良的人们的受害者。",
        answers: [
                { option: "A", answer: "shrewdness", chinese_answer: "精明", chinese_romanization: "jīngmíng" },
                { option: "B", answer: "naivete", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
                { option: "C", answer: "discernment", chinese_answer: "洞察力", chinese_romanization: "dòngchá lì" },
                { option: "D", answer: "skepticism", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'naivete' means a lack of experience, wisdom, or judgment; innocence or gullibility." +
                "<br><br>" +
                "(A) 'shrewdness' means having or showing sharp powers of judgment." +
                "<br><br>" +
                "(C) 'discernment' means the ability to judge well." +
                "<br><br>" +
                "(D) 'skepticism' means a skeptical attitude; doubt as to the truth of something.",
        chinese_explanation: "(B) '天真'一词意味着缺乏经验、智慧或判断；天真或轻信。" +
                "<br><br>" +
                "(A) '精明' 意味着具有或表现出敏锐的判断力。" +
                "<br><br>" +
                "(C) '洞察力' 意味着判断好的能力。" +
                "<br><br>" +
                "(D) '怀疑' 意味着怀疑的态度；对某事的真实性表示怀疑。"
    },
    {
        id: 4,
    question: "The professor's __________ for the poorly written essay was evident in his harsh comments and low grade.",
    chinese_question: "教授对这篇写得很差的论文的 __________ 显而易见，他的评论严厉，评分很低。",
    answers: [
        { option: "A", answer: "disdain", chinese_answer: "鄙视", chinese_romanization: "bǐshì" },
        { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "C", answer: "interest", chinese_answer: "兴趣", chinese_romanization: "xìngqù" },
        { option: "D", answer: "curiosity", chinese_answer: "好奇", chinese_romanization: "hàoqí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt." +
        "<br><br>" +
        "(B) 'praise' means the expression of approval or admiration for someone or something." +
        "<br><br>" +
        "(C) 'interest' means the state of wanting to know or learn about something or someone." +
        "<br><br>" +
        "(D) 'curiosity' means a strong desire to know or learn something.",
    chinese_explanation: "(A) '鄙视' 意味着认为某人或某物不值得考虑或尊重的感觉；蔑视。" +
        "<br><br>" +
        "(B) '赞扬' 意味着对某人或某事的赞许或钦佩之情。" +
        "<br><br>" +
        "(C) '兴趣' 意味着想知道或了解某事或某人的状态。" +
        "<br><br>" +
        "(D) '好奇' 意味着强烈的求知欲。"
    },
    {
        id: 5,
    question: "Her innovative teaching methods created a new __________ for educators, shifting how subjects were taught.",
    chinese_question: "她的创新教学方法为教育者创造了一个新的 __________，改变了科目的教学方式。",
    answers: [
        { option: "A", answer: "paradigm", chinese_answer: "范例", chinese_romanization: "fànlì" },
        { option: "B", answer: "misunderstanding", chinese_answer: "误解", chinese_romanization: "wùjiě" },
        { option: "C", answer: "difficulty", chinese_answer: "困难", chinese_romanization: "kùnnán" },
        { option: "D", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'paradigm' figuratively means a typical example or pattern of something; a model." +
        "<br><br>" +
        "(B) 'misunderstanding' means a failure to understand something correctly." +
        "<br><br>" +
        "(C) 'difficulty' means the state or condition of being difficult." +
        "<br><br>" +
        "(D) 'distraction' means a thing that prevents someone from giving full attention to something else.",
    chinese_explanation: "(A) '范例' 在此语境下意指某物的典型例子或模式；模型。" +
        "<br><br>" +
        "(B) '误解' 意味着未能正确理解某事。" +
        "<br><br>" +
        "(C) '困难' 意味着困难的状态或条件。" +
        "<br><br>" +
        "(D) '分心' 意味着防止某人全神贯注于其他事情的事物。"
    },
    {
        id: 6,
    question: "The dog's bark served as a __________ that someone was at the door.",
    chinese_question: "狗的叫声是有人在门口的 __________。",
    answers: [
        { option: "A", answer: "enigma", chinese_answer: "谜", chinese_romanization: "mí" },
        { option: "B", answer: "cue", chinese_answer: "提示", chinese_romanization: "tíshì" },
        { option: "C", answer: "paradox", chinese_answer: "悖论", chinese_romanization: "bèilùn" },
        { option: "D", answer: "riddle", chinese_answer: "谜语", chinese_romanization: "míyǔ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'cue' means a signal for someone to enter or begin their speech or action." +
        "<br><br>" +
        "(A) 'enigma' means something that is mysterious or difficult to understand." +
        "<br><br>" +
        "(C) 'paradox' means a statement that contradicts itself but might be true." +
        "<br><br>" +
        "(D) 'riddle' means a question or statement intentionally phrased to require ingenuity in ascertaining its answer or meaning.",
    chinese_explanation: "(B) '提示' 一词意味着某人进入或开始讲话或行动的信号。" +
        "<br><br>" +
        "(A) '谜' 意味着神秘或难以理解的事物。" +
        "<br><br>" +
        "(C) '悖论' 意味着自相矛盾但可能真实的陈述。" +
        "<br><br>" +
        "(D) '谜语' 意味着故意用短语表示的问题或陈述，需用巧思才能确定其答案或含义。"
    },
    {
        id: 7,
    question: "The earthquake had a devastating __________ on the city, causing widespread destruction.",
    chinese_question: "地震对这座城市造成了毁灭性的 __________ ，导致了广泛的破坏。",
    answers: [
        { option: "A", answer: "impact", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
        { option: "B", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "C", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
        { option: "D", answer: "remedy", chinese_answer: "治疗", chinese_romanization: "zhìliáo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'impact' means the strong effect or influence that something has on a situation or person." +
        "<br><br>" +
        "(B) 'celebration' means the action of celebrating an important day or event." +
        "<br><br>" +
        "(C) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect." +
        "<br><br>" +
        "(D) 'remedy' means a medicine or treatment for a disease or injury.",
    chinese_explanation: "(A) '影响' 意味着某物对情况或人的强烈效果或影响。" +
        "<br><br>" +
        "(B) '庆祝' 意味着庆祝重要日子或事件的行为。" +
        "<br><br>" +
        "(C) '和谐' 意味着同时发出的音乐音符的组合，以产生具有令人愉悦效果的和弦和和弦进行。" +
        "<br><br>" +
        "(D) '治疗' 意味着对疾病或损伤的药物或治疗。"
    },
    {
        id: 8,
    question: "The stock market saw a dramatic __________ after the unexpected economic news, with stock prices dropping sharply and investors scrambling to sell.",
    chinese_question: "在意外的经济新闻发布后，股市出现了剧烈的 __________，股票价格急剧下跌，投资者争相抛售。",
    answers: [
        { option: "A", answer: "plunge", chinese_answer: "暴跌", chinese_romanization: "bàodiē" },
        { option: "B", answer: "rise", chinese_answer: "上升", chinese_romanization: "shàngshēng" },
        { option: "C", answer: "stabilization", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "D", answer: "fluctuation", chinese_answer: "波动", chinese_romanization: "bōdòng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'plunge' means to fall or drop suddenly in amount or value." +
        "<br><br>" +
        "(B) 'rise' means to move upward." +
        "<br><br>" +
        "(C) 'stabilization' means the process of becoming or making something more steady and unchanging." +
        "<br><br>" +
        "(D) 'fluctuation' means an irregular rising and falling in number or amount.",
    chinese_explanation: "(A) '暴跌' 意味着数量或价值突然下降。" +
        "<br><br>" +
        "(B) '上升' 意味着向上移动。" +
        "<br><br>" +
        "(C) '稳定' 意味着变得或使某物更加稳定和不变的过程。" +
        "<br><br>" +
        "(D) '波动' 意味着数量或金额的不规则上升和下降。"
    },
    {
        id: 9,
    question: "She excelled in the academic __________, always striving to be the best in her field.",
    chinese_question: "她在学术 __________ 中表现出色，总是努力成为她领域中的佼佼者。",
    answers: [
        { option: "A", answer: "room", chinese_answer: "房间", chinese_romanization: "fángjiān" },
        { option: "B", answer: "dichotomy", chinese_answer: "二分法", chinese_romanization: "èrfēn fǎ" },
        { option: "C", answer: "arena", chinese_answer: "竞技场", chinese_romanization: "jìngjì chǎng" },
        { option: "D", answer: "hall", chinese_answer: "大厅", chinese_romanization: "dàtīng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'arena' means a place or scene of activity, debate, or conflict." +
        "<br><br>" +
        "(A) 'room' means a part or division of a building enclosed by walls, floor, and ceiling." +
        "<br><br>" +
        "(B) 'dichotomy' means a division or contrast between two things that are or are represented as being opposed or entirely different." +
        "<br><br>" +
        "(D) 'hall' means a large room or building for meetings, concerts, or other events.",
    chinese_explanation: "(C) '竞技场' 意味着活动、辩论或冲突的场所或场景。" +
        "<br><br>" +
        "(A) '房间' 意味着建筑物的一部分或分区，由墙壁、地板和天花板围起来。" +
        "<br><br>" +
        "(B) '二分法' 意味着两个对立或完全不同的事物之间的划分或对比。" +
        "<br><br>" +
        "(D) '大厅' 意味着用于会议、音乐会或其他活动的大房间或建筑。"
    },
    {
        id: 10,
    question: "The __________ in the cafeteria made it hard to hear the announcements over the loudspeaker.",
    chinese_question: "食堂里的 __________ 让人难以听清扩音器上的公告。",
    answers: [
        { option: "A", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" },
        { option: "B", answer: "serenity", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "C", answer: "hubbub", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
        { option: "D", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'hubbub' means a chaotic noise caused by a crowd of people." +
        "<br><br>" +
        "(A) 'silence' means complete absence of sound." +
        "<br><br>" +
        "(B) 'serenity' means the state of being calm and peaceful." +
        "<br><br>" +
        "(D) 'tranquility' means calmness and peace.",
    chinese_explanation: "(C) '喧闹' 意味着由一群人引起的混乱噪音。" +
        "<br><br>" +
        "(A) '安静' 意味着完全没有声音。" +
        "<br><br>" +
        "(B) '平静' 意味着冷静和平静的状态。" +
        "<br><br>" +
        "(D) '宁静' 意味着平静和安宁。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
