// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His __________ habits of working late into the night were well-known among his colleagues.",
    chinese_question: "他深夜工作的 __________ 习惯在同事中是众所周知的。",
    answers: [
        { option: "A", answer: "diurnal", chinese_answer: "白天活动的", chinese_romanization: "báitiān huódòng de" },
        { option: "B", answer: "nocturnal", chinese_answer: "夜间活动的", chinese_romanization: "yèjiān huódòng de" },
        { option: "C", answer: "early", chinese_answer: "早", chinese_romanization: "zǎo" },
        { option: "D", answer: "morning", chinese_answer: "早晨", chinese_romanization: "zǎochén" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'nocturnal' means active at night." +
        "<br><br>" +
        "(A) 'diurnal' means active during the day." +
        "<br><br>" +
        "(C) 'early' means happening or done before the usual or expected time." +
        "<br><br>" +
        "(D) 'morning' means the period of time between midnight and noon, especially from sunrise to noon.",
    chinese_explanation: "(B) '夜间活动的' 意味着在夜间活动的。" +
        "<br><br>" +
        "(A) '白天活动的' 意味着在白天活动的。" +
        "<br><br>" +
        "(C) '早' 意味着在通常或预期时间之前发生或完成。" +
        "<br><br>" +
        "(D) '早晨' 意味着从午夜到中午，尤其是从日出到中午的时间段。"
    },
    {
        id: 2,
        question: "The __________ grip of the athlete on the rope ensured he wouldn't fall during the competition.",
        chinese_question: "运动员对绳子的 __________ 抓握确保了他在比赛中不会掉下来。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "loose", chinese_answer: "松的", chinese_romanization: "sōng de" },
            { option: "C", answer: "tenacious", chinese_answer: "顽强的", chinese_romanization: "wánqiáng de" },
            { option: "D", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tenacious' means tending to keep a firm hold of something; clinging or adhering closely; persistent." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'loose' means not firmly or tightly fixed in place." +
            "<br><br>" +
            "(D) 'fragile' means easily broken or damaged.",
        chinese_explanation: "(C) '顽强的' 意味着倾向于牢牢抓住某物；紧贴或紧紧依附；坚持不懈。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力要求任务的能力；缺乏体力和精力。" +
            "<br><br>" +
            "(B) '松的' 意味着没有牢固或紧紧固定在原地的。" +
            "<br><br>" +
            "(D) '脆弱的' 意味着容易破碎或损坏的。"
    },
    {
        id: 3,
        question: "When asked about the sudden changes in the project, he looked __________, clearly unprepared for the question and unsure how to answer.",
        chinese_question: "当被问及项目的突然变化时，他显得 __________，显然对这个问题毫无准备，不知道如何回答。",
        answers: [
            { option: "A", answer: "nonplussed", chinese_answer: "不知所措的", chinese_romanization: "bù zhī suǒ cuò de" },
            { option: "B", answer: "composed", chinese_answer: "镇定的", chinese_romanization: "zhèndìng de" },
            { option: "C", answer: "unfazed", chinese_answer: "不受干扰的", chinese_romanization: "bù shòu gānrǎo de" },
            { option: "D", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nonplussed' means surprised and confused so much that one is unsure how to react." +
            "<br><br>" +
            "(B) 'composed' means having one's feelings and expression under control; calm." +
            "<br><br>" +
            "(C) 'unfazed' means not disconcerted or perturbed." +
            "<br><br>" +
            "(D) 'certain' means known for sure; established beyond doubt.",
        chinese_explanation: "(A) '不知所措的' 意味着惊讶和困惑，以至于不确定如何反应。" +
            "<br><br>" +
            "(B) '镇定的' 意味着控制自己的情绪和表达；冷静的。" +
            "<br><br>" +
            "(C) '不受干扰的' 意味着不受不安或困扰的。" +
            "<br><br>" +
            "(D) '确定的' 意味着确信的；超出怀疑的。"
    },
    {
        id: 4,
    question: "His __________ handling of the crisis earned him the admiration of his peers.",
    chinese_question: "他对危机的__________处理赢得了同事们的钦佩。",
    answers: [
        { option: "A", answer: "incompetent", chinese_answer: "无能的", chinese_romanization: "wúnéng de" },
        { option: "B", answer: "unskilled", chinese_answer: "不熟练的", chinese_romanization: "bù shúliàn de" },
        { option: "C", answer: "proficient", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
        { option: "D", answer: "inept", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'proficient' means competent or skilled in doing or using something. Figuratively, it can mean being very capable and effective." +
        "<br><br>" +
        "(A) 'incompetent' means not having or showing the necessary skills to do something successfully." +
        "<br><br>" +
        "(B) 'unskilled' means not having or requiring special skill or training." +
        "<br><br>" +
        "(D) 'inept' means having or showing no skill; clumsy.",
    chinese_explanation: "(C) '熟练的'一词意味着在做某事或使用某物方面有能力或技能的。比喻地，它可以表示非常有能力和有效的。" +
        "<br><br>" +
        "(A) '无能的' 意味着没有或表现出没有必要的技能来成功地做某事。" +
        "<br><br>" +
        "(B) '不熟练的' 意味着没有或不需要特殊技能或训练的。" +
        "<br><br>" +
        "(D) '笨拙的' 意味着没有或表现出没有技能的；笨拙的。"
    },
    {
        id: 5,
    question: "The teacher was __________ to see so many students fail the exam despite her efforts to prepare them.",
    chinese_question: "尽管老师尽力准备，看到这么多学生考试不及格，她感到非常 __________。",
    answers: [
        { option: "A", answer: "pleased", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
        { option: "B", answer: "dismayed", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
        { option: "C", answer: "satisfied", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" },
        { option: "D", answer: "encouraged", chinese_answer: "受到鼓舞的", chinese_romanization: "shòudào gǔwǔ de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dismayed' means feeling distress or alarm." +
        "<br><br>" +
        "(A) 'pleased' means feeling or showing pleasure and satisfaction." +
        "<br><br>" +
        "(C) 'satisfied' means contented; pleased." +
        "<br><br>" +
        "(D) 'encouraged' means given support, confidence, or hope.",
    chinese_explanation: "(B) '沮丧的' 意味着感到困扰或惊慌。" +
        "<br><br>" +
        "(A) '高兴的' 意味着感到或表现出快乐和满意。" +
        "<br><br>" +
        "(C) '满意的' 意味着感到满足的；高兴的。" +
        "<br><br>" +
        "(D) '受到鼓舞的' 意味着得到支持、自信或希望。"
    },
    {
        id: 6,
    question: "The technological advancements in the last decade are __________ to those living a century ago.",
    chinese_question: "过去十年的技术进步对一百年前的人来说是 __________ 的。",
    answers: [
        { option: "A", answer: "common", chinese_answer: "常见", chinese_romanization: "chángjiàn" },
        { option: "B", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
        { option: "C", answer: "imaginable", chinese_answer: "可以想象", chinese_romanization: "kěyǐ xiǎngxiàng" },
        { option: "D", answer: "unimaginable", chinese_answer: "难以想象", chinese_romanization: "nányǐ xiǎngxiàng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'unimaginable' means difficult or impossible to comprehend." +
        "<br><br>" +
        "(A) 'common' means occurring, found, or done often." +
        "<br><br>" +
        "(B) 'mundane' means lacking interest or excitement." +
        "<br><br>" +
        "(C) 'imaginable' means able to be imagined or thought of.",
    chinese_explanation: "(D) “难以想象” 意味着难以或不可能理解。" +
        "<br><br>" +
        "(A) '常见' 意味着经常发生、发现或完成。" +
        "<br><br>" +
        "(B) '平凡' 意味着缺乏兴趣或兴奋。" +
        "<br><br>" +
        "(C) '可以想象' 意味着能够被想象或想到。"
    },
    {
        id: 7,
    question: "The lawyer's __________ questioning during the trial exposed the witness's lies.",
    chinese_question: "律师在审判中的 __________ 质问揭露了证人的谎言。",
    answers: [
        { option: "A", answer: "shrewd", chinese_answer: "精明", chinese_romanization: "jīngmíng" },
        { option: "B", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
        { option: "C", answer: "lenient", chinese_answer: "宽容", chinese_romanization: "kuānróng" },
        { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'shrewd' means having or showing sharp powers of judgment; astute." +
        "<br><br>" +
        "(B) 'naive' means showing a lack of experience, wisdom, or judgment." +
        "<br><br>" +
        "(C) 'lenient' means more merciful or tolerant than expected." +
        "<br><br>" +
        "(D) 'passive' means accepting or allowing what happens without active response.",
    chinese_explanation: "(A) '精明' 意味着拥有或表现出敏锐的判断力；精明。" +
        "<br><br>" +
        "(B) '天真' 意味着缺乏经验、智慧或判断。" +
        "<br><br>" +
        "(C) '宽容' 意味着比预期更仁慈或宽容。" +
        "<br><br>" +
        "(D) '被动' 意味着接受或允许发生的事情而没有积极的反应。"
    },
    {
        id: 8,
    question: "It is important to wear __________ attire to a job interview to make a good impression.",
    chinese_question: "参加工作面试时穿着 __________ 的服装很重要，以留下良好的印象。",
    answers: [
        { option: "A", answer: "inappropriate", chinese_answer: "不合适的", chinese_romanization: "bù héshì de" },
        { option: "B", answer: "casual", chinese_answer: "休闲的", chinese_romanization: "xiūxián de" },
        { option: "C", answer: "formal", chinese_answer: "正式的", chinese_romanization: "zhèngshì de" },
        { option: "D", answer: "appropriate", chinese_answer: "合适的", chinese_romanization: "héshì de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'appropriate' means suitable or proper in the circumstances." +
        "<br><br>" +
        "(A) 'inappropriate' means not suitable or proper in the circumstances." +
        "<br><br>" +
        "(B) 'casual' means relaxed and unconcerned." +
        "<br><br>" +
        "(C) 'formal' means done in accordance with convention or etiquette.",
    chinese_explanation: "(D) “合适的” 意味着在情况下适当或合适的。" +
        "<br><br>" +
        "(A) '不合适的' 意味着在情况下不适当或不合适的。" +
        "<br><br>" +
        "(B) '休闲的' 意味着放松和不关心的。" +
        "<br><br>" +
        "(C) '正式的' 意味着按照惯例或礼仪进行的。"
    },
    {
        id: 9,
        question: "The laboratory maintained a __________ environment to prevent contamination, ensuring all equipment was clean and free from any microorganisms.",
        chinese_question: "实验室保持 __________ 的环境以防止污染，确保所有设备都干净并且没有任何微生物。",
        answers: [
            { option: "A", answer: "sterile", chinese_answer: "无菌的", chinese_romanization: "wújūn de" },
            { option: "B", answer: "cluttered", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" },
            { option: "C", answer: "messy", chinese_answer: "凌乱的", chinese_romanization: "língluàn de" },
            { option: "D", answer: "unsanitary", chinese_answer: "不卫生的", chinese_romanization: "bù wèishēng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sterile' means free from bacteria or other living microorganisms; totally clean." +
            "<br><br>" +
            "(B) 'cluttered' means crowded with too many things." +
            "<br><br>" +
            "(C) 'messy' means untidy or dirty." +
            "<br><br>" +
            "(D) 'unsanitary' means not clean or hygienic; unhealthy.",
        chinese_explanation: "(A) '无菌的' 意味着没有细菌或其他活微生物的；完全干净的。" +
            "<br><br>" +
            "(B) '杂乱的' 意味着东西太多而拥挤的。" +
            "<br><br>" +
            "(C) '凌乱的' 意味着不整洁或脏的。" +
            "<br><br>" +
            "(D) '不卫生的' 意味着不干净或不卫生的；不健康的。"
    },
    {
        id: 10,
    question: "The once small village has grown into a __________ town, with thriving businesses and a high standard of living for its residents.",
    chinese_question: "这个曾经的小村庄已经发展成一个 __________ 的城镇，拥有繁荣的企业和高标准的生活水平。",
    answers: [
        { option: "A", answer: "prosperous", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
        { option: "B", answer: "impoverished", chinese_answer: "贫困的", chinese_romanization: "pínkùn de" },
        { option: "C", answer: "struggling", chinese_answer: "努力的", chinese_romanization: "nǔlì de" },
        { option: "D", answer: "declining", chinese_answer: "衰退的", chinese_romanization: "shuāituì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'prosperous' means successful in material terms; flourishing financially." +
        "<br><br>" +
        "(B) 'impoverished' means reduced to poverty." +
        "<br><br>" +
        "(C) 'struggling' means striving to achieve or attain something in the face of difficulty or resistance." +
        "<br><br>" +
        "(D) 'declining' means becoming smaller, fewer, or less; decreasing.",
    chinese_explanation: "(A) '繁荣的' 意味着在物质上成功的；在经济上蓬勃发展的。" +
        "<br><br>" +
        "(B) '贫困的' 意味着陷入贫困的。" +
        "<br><br>" +
        "(C) '努力的' 意味着在面对困难或阻力时努力实现或达到某事。" +
        "<br><br>" +
        "(D) '衰退的' 意味着变得更小、更少或减少的。"
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
