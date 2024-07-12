// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She took on the __________ responsibility of caring for her elderly parents.",
        chinese_question: "她承担了照顾年迈父母的 __________ 责任。",
        answers: [
            { option: "A", answer: "joint", chinese_answer: "联合", chinese_romanization: "liánhé" },
            { option: "B", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "C", answer: "insignificant", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐn yào" },
            { option: "D", answer: "sole", chinese_answer: "唯一", chinese_romanization: "wéiyī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sole' means being the only one." +
            "<br><br>" +
            "(A) 'joint' means shared, held, or made by two or more people, parties, or organizations together." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(D) '唯一' 意味着是唯一的一个。" +
            "<br><br>" +
            "(A) '联合' 意味着由两个人、各方或组织共同分享、持有或制作的。" +
            "<br><br>" +
            "(B) '次要' 意味着重要性、严重性或意义较小。" +
            "<br><br>" +
            "(C) '无关紧要' 意味着太小或不重要而不值得考虑。"
    },
    {
        id: 2,
        question: "Her __________ efforts to help often resulted in more chaos than assistance.",
        chinese_question: "她 __________ 的帮助努力经常导致更多的混乱而不是帮助。",
        answers: [
            { option: "A", answer: "measured", chinese_answer: "慎重的", chinese_romanization: "shènzhòng de" },
            { option: "B", answer: "thoughtful", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
            { option: "C", answer: "overzealous", chinese_answer: "过度热心的", chinese_romanization: "guòdù rèxīn de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'overzealous' means excessively enthusiastic or fervent." +
            "<br><br>" +
            "(A) 'measured' means having a slow, regular rhythm." +
            "<br><br>" +
            "(B) 'thoughtful' means showing consideration for the needs of other people." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '过度热心的' 意味着过于热情或狂热的。" +
            "<br><br>" +
            "(A) '慎重的' 意味着有缓慢、规律的节奏。" +
            "<br><br>" +
            "(B) '体贴的' 意味着对他人的需求表示体贴。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 3,
        question: "The elegance of the design was __________, making it appealing without being overly flashy.",
        chinese_question: "设计的优雅是__________的，使其吸引人而不过于浮华。",
        answers: [
            { option: "A", answer: "exaggerated", chinese_answer: "夸张的", chinese_romanization: "kuāzhāng de" },
            { option: "B", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
            { option: "C", answer: "gaudy", chinese_answer: "艳俗的", chinese_romanization: "yànsú de" },
            { option: "D", answer: "flamboyant", chinese_answer: "华丽的", chinese_romanization: "huálì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'understated' means presented or expressed in a subtle and effective way." +
            "<br><br>" +
            "(A) 'exaggerated' means represented as greater than is true or reasonable." +
            "<br><br>" +
            "(C) 'gaudy' means extravagantly bright or showy, typically so as to be tasteless." +
            "<br><br>" +
            "(D) 'flamboyant' means tending to attract attention because of their exuberance, confidence, and stylishness.",
        chinese_explanation: "(B) '低调的'一词意味着以微妙和有效的方式呈现或表达的。" +
            "<br><br>" +
            "(A) '夸张的' 意味着表现得比真实或合理的要大。" +
            "<br><br>" +
            "(C) '艳俗的' 意味着极其明亮或显眼，通常显得无品味的。" +
            "<br><br>" +
            "(D) '华丽的' 意味着因其热情、自信和时尚而倾向于吸引注意力的。"
    },
    {
        id: 4,
    question: "Her __________ belief in the cause drove her to volunteer countless hours to help others.",
    chinese_question: "她对事业的 __________ 信念驱使她自愿奉献无数小时帮助他人。",
    answers: [
        { option: "A", answer: "lukewarm", chinese_answer: "温和", chinese_romanization: "wēnhé" },
        { option: "B", answer: "mild", chinese_answer: "温暖", chinese_romanization: "wēnnuǎn" },
        { option: "C", answer: "fervent", chinese_answer: "热情", chinese_romanization: "rèqíng" },
        { option: "D", answer: "dispassionate", chinese_answer: "冷静", chinese_romanization: "lěngjìng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'fervent' means having or displaying a passionate intensity." +
        "<br><br>" +
        "(A) 'lukewarm' means only moderately warm; tepid." +
        "<br><br>" +
        "(B) 'mild' means not severe, serious, or harsh." +
        "<br><br>" +
        "(D) 'dispassionate' means not influenced by strong emotion, and so able to be rational and impartial.",
    chinese_explanation: "(C) '热情' 意味着具有或表现出强烈的激情。" +
        "<br><br>" +
        "(A) '温和' 意味着不严重、严肃或严厉。" +
        "<br><br>" +
        "(B) '温暖' 意味着只有适度的温暖；温的。" +
        "<br><br>" +
        "(D) '冷静' 意味着不受强烈情感的影响，因此能够理性和公正。"
    },
    {
        id: 5,
    question: "She remained __________ to the speaker, nodding in agreement at key points.",
    chinese_question: "她始终 __________ 于演讲者，在关键点上点头表示同意。",
    answers: [
        { option: "A", answer: "distracted", chinese_answer: "分心的", chinese_romanization: "fēnxīn de" },
        { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
        { option: "C", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
        { option: "D", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'attentive' means paying close attention to something." +
        "<br><br>" +
        "(A) 'distracted' means unable to concentrate because one's mind is preoccupied." +
        "<br><br>" +
        "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'uninterested' means not interested in or concerned about something or someone.",
    chinese_explanation: "(C) “注意的” 意味着密切注意某事。" +
        "<br><br>" +
        "(A) '分心的' 意味着无法集中注意力，因为心思被其他事情占据。" +
        "<br><br>" +
        "(B) '漠不关心的' 意味着没有特别的兴趣或同情心；不关心的。" +
        "<br><br>" +
        "(D) '不感兴趣的' 意味着对某事或某人不感兴趣或不关心。"
    },
    {
        id: 6,
        question: "The villain's __________ intentions were clear as he plotted to harm the hero.",
        chinese_question: "恶棍的 __________ 意图很明显，因为他正在策划伤害英雄。",
        answers: [
            { option: "A", answer: "kind", chinese_answer: "善良", chinese_romanization: "shànliáng" },
            { option: "B", answer: "benevolent", chinese_answer: "仁慈", chinese_romanization: "réncí" },
            { option: "C", answer: "malevolent", chinese_answer: "恶毒", chinese_romanization: "èdú" },
            { option: "D", answer: "helpful", chinese_answer: "乐于助人", chinese_romanization: "lè yú zhù rén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'malevolent' means having or showing a wish to do evil to others." +
            "<br><br>" +
            "(A) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(B) 'benevolent' means well meaning and kindly." +
            "<br><br>" +
            "(D) 'helpful' means giving or ready to give help.",
        chinese_explanation: "(C) '恶毒' 意味着有或表现出对他人的恶意。" +
            "<br><br>" +
            "(A) '善良' 意味着有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "(B) '仁慈' 意味着善良的。" +
            "<br><br>" +
            "(D) '乐于助人' 意味着给予或准备提供帮助。"
    },
    {
        id: 7,
    question: "The __________ silence in the room after the bad news made everyone uneasy.",
    chinese_question: "坏消息传来后，房间里 __________ 的沉默让每个人都感到不安。",
    answers: [
        { option: "A", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
        { option: "B", answer: "joyous", chinese_answer: "欢乐的", chinese_romanization: "huānlè de" },
        { option: "C", answer: "sullen", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
        { option: "D", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'sullen' means bad-tempered and sulky; gloomy." +
        "<br><br>" +
        "(A) 'lively' means full of life and energy; active and outgoing." +
        "<br><br>" +
        "(B) 'joyous' means feeling, showing, or causing great pleasure and happiness." +
        "<br><br>" +
        "(D) 'cheerful' means noticeably happy and optimistic.",
    chinese_explanation: "(C) '阴沉的' 意味着脾气暴躁和愠怒的；阴郁的。" +
        "<br><br>" +
        "(A) '活泼的' 意味着充满活力和能量的；积极和外向的。" +
        "<br><br>" +
        "(B) '欢乐的' 意味着感到、表现或引起极大的快乐和幸福的。" +
        "<br><br>" +
        "(D) '愉快的' 意味着明显的快乐和乐观。"
    },
    {
        id: 8,
    question: "Her performance was __________, earning her a standing ovation from the audience and rave reviews from critics.",
    chinese_question: "她的表演非常 __________，观众起立鼓掌，评论家也给予了高度评价。",
    answers: [
        { option: "A", answer: "phenomenal", chinese_answer: "了不起的", chinese_romanization: "liǎobuqǐ de" },
        { option: "B", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
        { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
        { option: "D", answer: "average", chinese_answer: "一般的", chinese_romanization: "yībān de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'phenomenal' means very remarkable; extraordinary." +
        "<br><br>" +
        "(B) 'mediocre' means of only moderate quality; not very good." +
        "<br><br>" +
        "(C) 'ordinary' means with no special or distinctive features; normal." +
        "<br><br>" +
        "(D) 'average' means typical or common.",
    chinese_explanation: "(A) '了不起的' 意味着非常显著的；非凡的。" +
        "<br><br>" +
        "(B) '平庸的' 意味着质量一般的；不是很好的。" +
        "<br><br>" +
        "(C) '普通的' 意味着没有特别或独特的特征的；正常的。" +
        "<br><br>" +
        "(D) '一般的' 意味着典型的或常见的。"
    },
    {
        id: 9,
    question: "The evidence against the suspect was __________, leading to a quick conviction.",
    chinese_question: "对嫌疑人的证据是__________的，导致了迅速的定罪。",
    answers: [
        { option: "A", answer: "debatable", chinese_answer: "可争辩的", chinese_romanization: "kě zhēngbiàn de" },
        { option: "B", answer: "undeniable", chinese_answer: "无可否认的", chinese_romanization: "wú kě fǒurèn de" },
        { option: "C", answer: "questionable", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
        { option: "D", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'undeniable' means unable to be denied or disputed." +
        "<br><br>" +
        "(A) 'debatable' means open to discussion or argument." +
        "<br><br>" +
        "(C) 'questionable' means doubtful as regards truth or validity." +
        "<br><br>" +
        "(D) 'uncertain' means not able to be relied on; not known or definite.",
    chinese_explanation: "(B) '无可否认的'一词意味着无法否认或争辩的。" +
        "<br><br>" +
        "(A) '可争辩的' 意味着可以讨论或争论的。" +
        "<br><br>" +
        "(C) '可疑的' 意味着在真相或有效性方面可疑的。" +
        "<br><br>" +
        "(D) '不确定的' 意味着无法依赖的；不确定的或不明确的。"
    },
    {
        id: 10,
        question: "She was known for her __________ behavior, always helping those in need and standing up for what was right.",
        chinese_question: "她以其 __________ 的行为闻名，总是帮助有需要的人，并为正义挺身而出。",
        answers: [
            { option: "A", answer: "deceitful", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" },
            { option: "B", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "C", answer: "virtuous", chinese_answer: "有道德的", chinese_romanization: "yǒu dàodé de" },
            { option: "D", answer: "corrupt", chinese_answer: "腐败的", chinese_romanization: "fǔbài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(A) 'deceitful' means guilty of or involving deceit; deceiving or misleading others." +
            "<br><br>" +
            "(B) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(D) 'corrupt' means having or showing a willingness to act dishonestly in return for money or personal gain.",
        chinese_explanation: "(C) '有道德的' 意味着有或表现出高尚的道德标准。" +
            "<br><br>" +
            "(A) '欺骗的' 意味着欺骗或误导他人的行为。" +
            "<br><br>" +
            "(B) '自私的' 意味着缺乏对他人的考虑；主要关心个人利益或享乐。" +
            "<br><br>" +
            "(D) '腐败的' 意味着愿意为金钱或个人利益而不诚实地行事。"
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
