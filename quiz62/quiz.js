// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The wealthy businessman treated his employees with __________, rarely acknowledging their hard work and dedication.",
    chinese_question: "这位富有的商人对待员工时带着 __________，很少认可他们的辛勤工作和奉献精神。",
    answers: [
        { option: "A", answer: "disdain", chinese_answer: "鄙视", chinese_romanization: "bǐshì" },
        { option: "B", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "C", answer: "kindness", chinese_answer: "善良", chinese_romanization: "shànliáng" },
        { option: "D", answer: "sympathy", chinese_answer: "同情", chinese_romanization: "tóngqíng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt." +
        "<br><br>" +
        "(B) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements." +
        "<br><br>" +
        "(C) 'kindness' means the quality of being friendly, generous, and considerate." +
        "<br><br>" +
        "(D) 'sympathy' means feelings of pity and sorrow for someone else's misfortune.",
    chinese_explanation: "(A) '鄙视' 意味着认为某人或某物不值得考虑或尊重的感觉；蔑视。" +
        "<br><br>" +
        "(B) '尊重' 意味着因某人的能力、品质或成就而产生的深深的钦佩之情。" +
        "<br><br>" +
        "(C) '善良' 意味着友好、慷慨和体贴的品质。" +
        "<br><br>" +
        "(D) '同情' 意味着对他人不幸的怜悯和悲伤。"
    },
    {
        id: 2,
    question: "The hiring committee's __________ was apparent when they only shortlisted candidates from certain universities, overlooking other qualified applicants.",
    chinese_question: "当招聘委员会只将某些大学的候选人列入候选名单，忽视其他合格申请人时，他们的 __________ 显而易见。",
    answers: [
        { option: "A", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
        { option: "B", answer: "objectivity", chinese_answer: "客观性", chinese_romanization: "kèguān xìng" },
        { option: "C", answer: "equity", chinese_answer: "公平", chinese_romanization: "gōngpíng" },
        { option: "D", answer: "inclusivity", chinese_answer: "包容性", chinese_romanization: "bāoróng xìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'bias' means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
        "<br><br>" +
        "(B) 'objectivity' means the quality of being objective." +
        "<br><br>" +
        "(C) 'equity' means the quality of being fair and impartial." +
        "<br><br>" +
        "(D) 'inclusivity' means the practice or policy of including people who might otherwise be excluded or marginalized.",
    chinese_explanation: "(A) '偏见' 意味着对一个人或一个群体的倾向或偏见，尤其是被认为不公平的方式。" +
        "<br><br>" +
        "(B) '客观性' 意味着客观的质量。" +
        "<br><br>" +
        "(C) '公平' 意味着公平和公正的质量。" +
        "<br><br>" +
        "(D) '包容性' 意味着包括可能被排除或边缘化的人的做法或政策。"
    },
    {
        id: 3,
        question: "Her __________ of experience in different fields made her an excellent candidate for the leadership role.",
        chinese_question: "她在不同领域的 __________ 经验使她成为领导角色的优秀候选人。",
        answers: [
                { option: "A", answer: "breadth", chinese_answer: "广度", chinese_romanization: "guǎngdù" },
                { option: "B", answer: "intensity", chinese_answer: "强度", chinese_romanization: "qiángdù" },
                { option: "C", answer: "height", chinese_answer: "高度", chinese_romanization: "gāodù" },
                { option: "D", answer: "density", chinese_answer: "密度", chinese_romanization: "mìdù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'breadth' figuratively means the extent or range of knowledge, experience, or activity." +
                "<br><br>" +
                "(B) 'intensity' means the quality of being intense." +
                "<br><br>" +
                "(C) 'height' means the measurement from base to top or (of a standing person) from head to foot." +
                "<br><br>" +
                "(D) 'density' means the degree of compactness of a substance.",
        chinese_explanation: "(A) '广度' 在此语境下意指知识、经验或活动的范围或程度。" +
                "<br><br>" +
                "(B) '强度' 意味着强烈的质量。" +
                "<br><br>" +
                "(C) '高度' 意味着从底部到顶部的测量或（站立的人）从头到脚的测量。" +
                "<br><br>" +
                "(D) '密度' 意味着物质的紧密程度。"
    },
    {
        id: 4,
        question: "The company's collapse was partly due to the __________ of its financial advisor, who had been embezzling funds for years.",
        chinese_question: "公司的倒闭部分归因于其财务顾问的 __________，他多年来一直在挪用资金。",
        answers: [
                { option: "A", answer: "trustworthiness", chinese_answer: "可信赖性", chinese_romanization: "kěxìn lài xìng" },
                { option: "B", answer: "treachery", chinese_answer: "背叛", chinese_romanization: "bèipàn" },
                { option: "C", answer: "competence", chinese_answer: "能力", chinese_romanization: "nénglì" },
                { option: "D", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'treachery' means betrayal of trust; deceptive action or nature." +
                "<br><br>" +
                "(A) 'trustworthiness' means the ability to be relied on as honest or truthful." +
                "<br><br>" +
                "(C) 'competence' means the ability to do something successfully or efficiently." +
                "<br><br>" +
                "(D) 'diligence' means careful and persistent work or effort.",
        chinese_explanation: "(B) '背叛'一词意味着背叛信任；欺骗行为或性质。" +
                "<br><br>" +
                "(A) '可信赖性' 意味着被信赖为诚实或真实的能力。" +
                "<br><br>" +
                "(C) '能力' 意味着成功或高效地做某事的能力。" +
                "<br><br>" +
                "(D) '勤奋' 意味着认真和持久的工作或努力。"
    },
    {
        id: 5,
        question: "The teacher served as a __________ between the school administration and the students, addressing concerns and suggestions from both sides.",
        chinese_question: "老师作为学校行政和学生之间的 __________，解决双方的关注和建议。",
        answers: [
            { option: "A", answer: "counselor", chinese_answer: "顾问", chinese_romanization: "gùwèn" },
            { option: "B", answer: "liaison", chinese_answer: "联络员", chinese_romanization: "liánluòyuán" },
            { option: "C", answer: "dictator", chinese_answer: "独裁者", chinese_romanization: "dúcáizhě" },
            { option: "D", answer: "instructor", chinese_answer: "教师", chinese_romanization: "jiàoshī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'liaison' means communication or cooperation that facilitates a close working relationship between people or organizations." +
            "<br><br>" +
            "(A) 'counselor' means a person trained to give guidance on personal or psychological problems." +
            "<br><br>" +
            "(C) 'dictator' means a ruler with total power over a country, typically one who has obtained control by force." +
            "<br><br>" +
            "(D) 'instructor' means a person who teaches something.",
        chinese_explanation: "(B) '联络员'一词意味着促进人或组织之间紧密工作关系的沟通或合作。" +
            "<br><br>" +
            "(A) '顾问' 意味着接受培训以提供个人或心理问题指导的人。" +
            "<br><br>" +
            "(C) '独裁者' 意味着对一个国家拥有全部权力的统治者，通常是通过武力获得控制权。" +
            "<br><br>" +
            "(D) '教师' 意味着教授某事的人。"
    },
    {
        id: 6,
    question: "His __________ that hard work and perseverance would eventually lead to success kept him motivated through tough times.",
    chinese_question: "他相信努力工作和坚持不懈最终会取得成功的 __________ 在艰难时期激励着他。",
    answers: [
        { option: "A", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "B", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "C", answer: "conviction", chinese_answer: "信念", chinese_romanization: "xìnniàn" },
        { option: "D", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'conviction' means a firmly held belief or opinion." +
        "<br><br>" +
        "(A) 'doubt' means a feeling of uncertainty or lack of conviction." +
        "<br><br>" +
        "(B) 'apathy' means lack of interest, enthusiasm, or concern." +
        "<br><br>" +
        "(D) 'uncertainty' means the state of being unsure of something.",
    chinese_explanation: "(C) '信念' 一词意味着坚定的信仰或意见。" +
        "<br><br>" +
        "(A) '怀疑' 意味着不确定的感觉或缺乏信念。" +
        "<br><br>" +
        "(B) '冷漠' 意味着缺乏兴趣、热情或关心。" +
        "<br><br>" +
        "(D) '不确定' 意味着对某事不确定的状态。"
    },
    {
        id: 7,
        question: "His __________ in debate made him a formidable opponent, able to counter any argument with ease.",
        chinese_question: "他在辩论中的 __________ 使他成为一个强大的对手，能够轻松反驳任何论点。",
        answers: [
                { option: "A", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
                { option: "B", answer: "prowess", chinese_answer: "英勇", chinese_romanization: "yīngyǒng" },
                { option: "C", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
                { option: "D", answer: "incompetence", chinese_answer: "无能", chinese_romanization: "wúnéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prowess' means skill or expertise in a particular activity or field; bravery in battle." +
                "<br><br>" +
                "(A) 'ignorance' means lack of knowledge or information." +
                "<br><br>" +
                "(C) 'uncertainty' means the state of being unsure." +
                "<br><br>" +
                "(D) 'incompetence' means inability to do something successfully; ineptitude.",
        chinese_explanation: "(B) '英勇'一词意味着在特定活动或领域的技能或专长；战斗中的勇敢。" +
                "<br><br>" +
                "(A) '无知' 意味着缺乏知识或信息。" +
                "<br><br>" +
                "(C) '不确定' 意味着不确定的状态。" +
                "<br><br>" +
                "(D) '无能' 意味着无法成功地做某事；无能。"
    },
    {
        id: 8,
    question: "The __________ in the orchestra's performance was noticeable, with several instruments out of tune.",
    chinese_question: "在管弦乐队的表演中，几种乐器跑调， __________ 是显而易见的。",
    answers: [
        { option: "A", answer: "dissonance", chinese_answer: "不和谐音", chinese_romanization: "bù héxié yīn" },
        { option: "B", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
        { option: "C", answer: "consonance", chinese_answer: "和音", chinese_romanization: "héyīn" },
        { option: "D", answer: "euphony", chinese_answer: "悦耳音", chinese_romanization: "yuè'ěr yīn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'dissonance' means a lack of harmony among musical notes." +
        "<br><br>" +
        "(B) 'unity' means the state of being united or joined as a whole." +
        "<br><br>" +
        "(C) 'consonance' means agreement or compatibility between opinions or actions." +
        "<br><br>" +
        "(D) 'euphony' means the quality of being pleasing to the ear.",
    chinese_explanation: "(A) '不和谐音' 一词意味着音乐音符之间缺乏和谐。" +
        "<br><br>" +
        "(B) '团结' 意味着团结或联合为整体的状态。" +
        "<br><br>" +
        "(C) '和音' 意味着意见或行动之间的协议或兼容性。" +
        "<br><br>" +
        "(D) '悦耳音' 意味着听起来令人愉悦的音质。"
    },
    {
        id: 9,
    question: "The unexplained noises in the old house at night filled the new tenants with __________.",
    chinese_question: "晚上老房子里的不明噪音让新房客感到 __________ 。",
    answers: [
        { option: "A", answer: "disquiet", chinese_answer: "不安", chinese_romanization: "bù'ān" },
        { option: "B", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
        { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "D", answer: "reassurance", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disquiet' means a feeling of anxiety or worry, used figuratively here." +
        "<br><br>" +
        "(B) 'joy' means a feeling of great pleasure and happiness." +
        "<br><br>" +
        "(C) 'indifference' means lack of interest, concern, or sympathy." +
        "<br><br>" +
        "(D) 'reassurance' means the action of removing someone's doubts or fears.",
    chinese_explanation: "(A) '不安' 意味着焦虑或担忧的感觉，这里是比喻用法。" +
        "<br><br>" +
        "(B) '快乐' 意味着极大的愉快和幸福感。" +
        "<br><br>" +
        "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
        "<br><br>" +
        "(D) '安慰' 意味着消除某人的疑虑或恐惧的行动。"
    },
    {
        id: 10,
    question: "He made several __________ to start his own business, like launching a tech startup and opening a café, before finally succeeding.",
    chinese_question: "他尝试了几次创业，比如创办一家科技初创公司和开设一家咖啡馆，最终才成功。",
    answers: [
        { option: "A", answer: "plans", chinese_answer: "计划", chinese_romanization: "jìhuà" },
        { option: "B", answer: "attempts", chinese_answer: "尝试", chinese_romanization: "chángshì" },
        { option: "C", answer: "successes", chinese_answer: "成功", chinese_romanization: "chénggōng" },
        { option: "D", answer: "retreats", chinese_answer: "撤退", chinese_romanization: "chètuì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'attempts' means efforts to achieve or complete a difficult task or action." +
        "<br><br>" +
        "(A) 'plans' means detailed proposals for doing or achieving something." +
        "<br><br>" +
        "(C) 'successes' means the accomplishment of aims or purposes." +
        "<br><br>" +
        "(D) 'retreats' means withdrawing from an enemy force as a result of their superior power or after a defeat.",
    chinese_explanation: "(B) '尝试' 意味着努力完成一项困难的任务或行动。" +
        "<br><br>" +
        "(A) '计划' 意味着做某事或实现某事的详细提议。" +
        "<br><br>" +
        "(C) '成功' 意味着实现目标或目的。" +
        "<br><br>" +
        "(D) '撤退' 意味着在敌方势力强大或战败后撤离。"
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
