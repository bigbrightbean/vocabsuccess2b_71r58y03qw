// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The author's latest novel was criticized for its __________ style, lacking the imaginative flair of her earlier works.",
    chinese_question: "这位作家的最新小说因其 __________ 的风格而受到批评，缺乏她早期作品的想象力。",
    answers: [
        { option: "A", answer: "prosaic", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
        { option: "B", answer: "poetic", chinese_answer: "诗意的", chinese_romanization: "shīyì de" },
        { option: "C", answer: "exciting", chinese_answer: "激动人心的", chinese_romanization: "jīdòng rén xīn de" },
        { option: "D", answer: "imaginative", chinese_answer: "富有想象力的", chinese_romanization: "fùyǒu xiǎngxiàng lì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'prosaic' means having the style or diction of prose; lacking poetic beauty; commonplace; unromantic." +
        "<br><br>" +
        "(B) 'poetic' means having an imaginative or sensitively emotional style of expression." +
        "<br><br>" +
        "(C) 'exciting' means causing great enthusiasm and eagerness." +
        "<br><br>" +
        "(D) 'imaginative' means having or showing creativity or inventiveness.",
    chinese_explanation: "(A) '平淡的' 意味着具有散文的风格或措辞；缺乏诗意的美；平凡的；不浪漫的。" +
        "<br><br>" +
        "(B) '诗意的' 意味着具有富有想象力或敏感情感的表达风格的。" +
        "<br><br>" +
        "(C) '激动人心的' 意味着引起极大的热情和渴望的。" +
        "<br><br>" +
        "(D) '富有想象力的' 意味着具有或表现出创造力或独创性的。"
    },
    {
        id: 2,
        question: "His __________ concern for the environment led him to start a non-profit organization dedicated to conservation.",
        chinese_question: "他对环境的 __________ 关注使他创办了一个致力于保护的非营利组织。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "C", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "D", answer: "disingenuous", chinese_answer: "不真诚的", chinese_romanization: "bù zhēnchéng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(D) 'disingenuous' means not candid or sincere, typically by pretending that one knows less about something than one really does.",
        chinese_explanation: "(C) '真诚的' 意味着真正的；真实的。" +
            "<br><br>" +
            "(A) '漠不关心的' 意味着没有特别兴趣或同情的；不关心的。" +
            "<br><br>" +
            "(B) '表面的' 意味着存在或发生在表面上的。" +
            "<br><br>" +
            "(D) '不真诚的' 意味着不坦率或不诚实的，通常是通过假装比实际知道的少。"
    },
    {
        id: 3,
        question: "The __________ debate showcased the candidates' strong positions and clear arguments.",
        chinese_question: "这场 __________ 的辩论展示了候选人的坚定立场和明确论点。",
        answers: [
            { option: "A", answer: "feeble", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
            { option: "B", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "C", answer: "robust", chinese_answer: "激烈的", chinese_romanization: "jīliè de" },
            { option: "D", answer: "indecisive", chinese_answer: "优柔寡断的", chinese_romanization: "yōuróuguǎduàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(A) 'feeble' means lacking physical strength, especially as a result of age or illness." +
            "<br><br>" +
            "(B) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(D) 'indecisive' means not settling an issue.",
        chinese_explanation: "(C) '激烈的' 意味着强壮和健康的；精力充沛的。" +
            "<br><br>" +
            "(A) '无力的' 意味着缺乏体力，尤其是由于年龄或疾病。" +
            "<br><br>" +
            "(B) '虚弱的' 意味着缺乏执行体力任务的力量；缺乏体力和精力的。" +
            "<br><br>" +
            "(D) '优柔寡断的' 意味着不能解决问题的。"
    },
    {
        id: 4,
    question: "The professor encouraged the students to ask __________ questions that directly pertained to the topic of the lecture.",
    chinese_question: "教授鼓励学生们提出与讲座主题直接相关的 __________ 问题。",
    answers: [
        { option: "A", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
        { option: "B", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
        { option: "C", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "D", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'relevant' means closely connected or appropriate to what is being done or considered." +
        "<br><br>" +
        "(B) 'irrelevant' means not connected with or relevant to something." +
        "<br><br>" +
        "(C) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(D) 'random' means made, done, happening, or chosen without method or conscious decision.",
    chinese_explanation: "(A) '相关的' 意味着与正在做或考虑的事情紧密相关或适当的。" +
        "<br><br>" +
        "(B) '无关的' 意味着与某事物无关的。" +
        "<br><br>" +
        "(C) '琐碎的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(D) '随机的' 意味着没有方法或有意识决定的。"
    },
    {
        id: 5,
    question: "Because of his __________ nature, he thrived in jobs that required constant interaction with clients.",
    chinese_question: "由于他 __________ 的性格，他在需要与客户不断互动的工作中茁壮成长。",
    answers: [
        { option: "A", answer: "introverted", chinese_answer: "内向", chinese_romanization: "nèixiàng" },
        { option: "B", answer: "extroverted", chinese_answer: "外向", chinese_romanization: "wàixiàng" },
        { option: "C", answer: "reserved", chinese_answer: "矜持", chinese_romanization: "jīnchí" },
        { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'extroverted' means outgoing, socially confident, and energetic." +
        "<br><br>" +
        "(A) 'introverted' means shy, reserved, and focused inward." +
        "<br><br>" +
        "(C) 'reserved' means slow to reveal emotion or opinions." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(B) '外向' 意味着外向、社交自信和精力充沛。" +
        "<br><br>" +
        "(A) '内向' 意味着害羞、矜持和内向。" +
        "<br><br>" +
        "(C) '矜持' 意味着慢于表达情感或意见。" +
        "<br><br>" +
        "(D) '冷漠' 意味着没有特别的兴趣或同情心；不关心。"
    },
    {
        id: 6,
    question: "The firefighter's __________ efforts of navigating through the smoke and carrying victims to safety saved many lives during the rescue operation.",
    chinese_question: "消防员在穿越浓烟和将受害者带到安全地带的 __________ 努力在救援行动中挽救了许多生命。",
    answers: [
        { option: "A", answer: "plucky", chinese_answer: "勇敢", chinese_romanization: "yǒnggǎn" },
        { option: "B", answer: "fearful", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
        { option: "C", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
        { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'plucky' means having or showing determined courage in the face of difficulties." +
        "<br><br>" +
        "(B) 'fearful' means feeling afraid or showing fear." +
        "<br><br>" +
        "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(D) 'passive' means accepting or allowing what happens without active response.",
    chinese_explanation: "(A) '勇敢' 意味着在困难面前表现出坚定的勇气。" +
        "<br><br>" +
        "(B) '恐惧' 意味着感到害怕或表现出恐惧。" +
        "<br><br>" +
        "(C) '粗心' 意味着没有足够的关注或考虑避免伤害或错误。" +
        "<br><br>" +
        "(D) '被动' 意味着接受或允许发生的事情而没有积极的反应。"
    },
    {
        id: 7,
    question: "The __________ professor, drawing from years of study and research, delivered a lecture that was both informative and inspiring.",
    chinese_question: "那位 __________ 的教授，借鉴了多年的学习和研究，做了一场既有信息量又鼓舞人心的讲座。",
    answers: [
        { option: "A", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
        { option: "B", answer: "unlearned", chinese_answer: "未受过教育的", chinese_romanization: "wèi shòuguò jiàoyù de" },
        { option: "C", answer: "educated", chinese_answer: "受过教育的", chinese_romanization: "shòuguò jiàoyù de" },
        { option: "D", answer: "uneducated", chinese_answer: "未受过教育的", chinese_romanization: "wèi shòuguò jiàoyù de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'educated' means having received education, especially to a high level." +
        "<br><br>" +
        "(A) 'ignorant' means lacking knowledge or awareness in general." +
        "<br><br>" +
        "(B) 'unlearned' means not well-educated or knowledgeable." +
        "<br><br>" +
        "(D) 'uneducated' means lacking education or schooling.",
    chinese_explanation: "(C) '受过教育的' 意味着接受过教育，尤其是高水平的教育。" +
        "<br><br>" +
        "(A) '无知的' 意味着缺乏一般知识或意识。" +
        "<br><br>" +
        "(B) '未受过教育的' 意味着没有受过良好教育或没有知识的。" +
        "<br><br>" +
        "(D) '未受过教育的' 意味着缺乏教育或学校教育的。"
    },
    {
        id: 8,
        question: "The speaker's __________ delivery kept the audience engaged, as his pauses and emphasis created a dynamic flow.",
        chinese_question: "演讲者的 __________ 表达方式使观众保持了兴趣，因为他的停顿和重音创造了动态的流动。",
        answers: [
            { option: "A", answer: "syncopated", chinese_answer: "切分的", chinese_romanization: "qiēfēn de" },
            { option: "B", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "C", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "D", answer: "flat", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'syncopated' means characterized by displaced beats or accents in music, creating unexpected rhythms, often used figuratively to describe a dynamic and engaging flow." +
            "<br><br>" +
            "(B) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted; expected." +
            "<br><br>" +
            "(D) 'flat' means lacking in interest, excitement, or variety.",
        chinese_explanation: "(A) '切分的' 意味着音乐中的节拍或重音被移位，创造出意外的节奏，通常用作比喻来描述动态和引人入胜的流动。" +
            "<br><br>" +
            "(B) '单调的' 意味着乏味、冗长和重复的；缺乏变化和兴趣的。" +
            "<br><br>" +
            "(C) '可预测的' 意味着能够被预测的；预期的。" +
            "<br><br>" +
            "(D) '平淡的' 意味着缺乏兴趣、兴奋或变化的。"
    },
    {
        id: 9,
    question: "He had an __________ motive for helping, which he did not reveal, but it became clear through his actions that it was self-serving.",
    chinese_question: "他有一个__________的帮助动机，但他没有透露，而是通过他的行动清楚表明这是自私的。",
    answers: [
        { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
        { option: "B", answer: "ulterior", chinese_answer: "隐秘的", chinese_romanization: "yǐnmì de" },
        { option: "C", answer: "apparent", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
        { option: "D", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ulterior' means existing beyond what is obvious or admitted; intentionally hidden." +
        "<br><br>" +
        "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
        "<br><br>" +
        "(C) 'apparent' means clearly visible or understood; obvious." +
        "<br><br>" +
        "(D) 'clear' means easy to perceive, understand, or interpret.",
    chinese_explanation: "(B) '隐秘的'一词意味着存在于明显或承认之外的；故意隐藏的。" +
        "<br><br>" +
        "(A) '明显的' 意味着容易察觉或理解的；清楚的、自明的或明显的。" +
        "<br><br>" +
        "(C) '明显的' 意味着清楚可见或理解的；明显的。" +
        "<br><br>" +
        "(D) '清楚的' 意味着容易察觉、理解或解释的。"
    },
    {
        id: 10,
        question: "The small village was __________ to flooding, as it was located in a low-lying area near the river.",
        chinese_question: "这个小村庄容易遭受洪水侵袭，因为它位于靠近河流的低洼地区。",
        answers: [
            { option: "A", answer: "immune", chinese_answer: "免疫的", chinese_romanization: "miǎnyì de" },
            { option: "B", answer: "fortified", chinese_answer: "加强防御的", chinese_romanization: "jiāqiáng fángyù de" },
            { option: "C", answer: "vulnerable", chinese_answer: "易受攻击的", chinese_romanization: "yìshòu gōngjī de" },
            { option: "D", answer: "protected", chinese_answer: "受保护的", chinese_romanization: "shòu bǎohù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vulnerable' means susceptible to physical or emotional attack or harm." +
            "<br><br>" +
            "(A) 'immune' means resistant to a particular infection or toxin." +
            "<br><br>" +
            "(B) 'fortified' means strengthened with defensive works to protect it against attack." +
            "<br><br>" +
            "(D) 'protected' means kept safe from harm or injury.",
        chinese_explanation: "(C) '易受攻击的' 意味着容易受到身体或情感上的攻击或伤害。" +
            "<br><br>" +
            "(A) '免疫的' 意味着对某种感染或毒素有抵抗力的。" +
            "<br><br>" +
            "(B) '加强防御的' 意味着用防御工事加强以保护其免受攻击。" +
            "<br><br>" +
            "(D) '受保护的' 意味着安全免受伤害或伤害。"
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
