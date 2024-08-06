// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ speech impressed the audience, flowing smoothly without any hesitation.",
        chinese_question: "她的 __________ 演讲给观众留下了深刻的印象，流畅自然，没有任何犹豫。",
        answers: [
            { option: "A", answer: "choppy", chinese_answer: "断断续续的", chinese_romanization: "duànduànxùxù de" },
            { option: "B", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" },
            { option: "C", answer: "sleek", chinese_answer: "流畅的", chinese_romanization: "liúchàng de" },
            { option: "D", answer: "disjointed", chinese_answer: "不连贯的", chinese_romanization: "bù liánguàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sleek' means smooth and glossy; having an elegant, streamlined shape, often used figuratively to mean polished and well-executed." +
            "<br><br>" +
            "(A) 'choppy' means with a lot of small, rough waves." +
            "<br><br>" +
            "(B) 'awkward' means causing or feeling embarrassment or inconvenience." +
            "<br><br>" +
            "(D) 'disjointed' means lacking a coherent sequence or connection.",
        chinese_explanation: "(C) '流畅的' 意味着光滑和有光泽的；具有优雅的流线型外形，通常用作比喻意指精致和执行良好的。" +
            "<br><br>" +
            "(A) '断断续续的' 意味着有很多小而粗糙的波浪的。" +
            "<br><br>" +
            "(B) '尴尬的' 意味着引起或感到尴尬或不便的。" +
            "<br><br>" +
            "(D) '不连贯的' 意味着缺乏连贯的顺序或联系。"
    },
    {
        id: 2,
    question: "The manager's __________ approach to resolving conflicts within the team helped maintain a harmonious work environment.",
    chinese_question: "经理 __________ 的处理团队内部冲突的方法有助于保持和谐的工作环境。",
    answers: [
        { option: "A", answer: "abrasive", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
        { option: "B", answer: "diplomatic", chinese_answer: "圆滑的", chinese_romanization: "yuánhuá de" },
        { option: "C", answer: "confrontational", chinese_answer: "对抗的", chinese_romanization: "duìkàng de" },
        { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'diplomatic' means dealing with people sensitively and effectively." +
        "<br><br>" +
        "(A) 'abrasive' means showing little concern for the feelings of others." +
        "<br><br>" +
        "(C) 'confrontational' means tending to deal with situations in an aggressive way." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy.",
    chinese_explanation: "(B) '圆滑的' 意味着敏感且有效地处理人与人之间的关系。" +
        "<br><br>" +
        "(A) '粗鲁的' 意味着对他人的感受不关心。" +
        "<br><br>" +
        "(C) '对抗的' 意味着倾向于以攻击性方式处理情况的。" +
        "<br><br>" +
        "(D) '漠不关心的' 意味着没有特别的兴趣或同情心的。"
    },
    {
        id: 3,
    question: "The __________ melody of the violin made everyone in the room feel peaceful and content.",
    chinese_question: "小提琴的 __________ 旋律让房间里的每个人都感到宁静和满足。",
    answers: [
        { option: "A", answer: "enchanting", chinese_answer: "迷人", chinese_romanization: "mí rén" },
        { option: "B", answer: "jarring", chinese_answer: "刺耳", chinese_romanization: "cì'ěr" },
        { option: "C", answer: "annoying", chinese_answer: "恼人", chinese_romanization: "nǎorén" },
        { option: "D", answer: "grating", chinese_answer: "刺激", chinese_romanization: "cìjī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enchanting' means delightfully charming or attractive." +
        "<br><br>" +
        "(B) 'jarring' means incongruous in a striking or shocking way; clashing." +
        "<br><br>" +
        "(C) 'annoying' means causing irritation or annoyance." +
        "<br><br>" +
        "(D) 'grating' means sounding harsh and unpleasant.",
    chinese_explanation: "(A) '迷人' 意味着令人愉快地迷人或有吸引力的。" +
        "<br><br>" +
        "(B) '刺耳' 意味着以令人震惊或惊讶的方式不协调；冲突。" +
        "<br><br>" +
        "(C) '恼人' 意味着引起烦恼或烦恼。" +
        "<br><br>" +
        "(D) '刺激' 意味着听起来粗糙和不愉快。"
    },
    {
        id: 4,
    question: "Her __________ efforts in the community have significantly improved the lives of many residents.",
    chinese_question: "她在社区的 __________ 努力显著改善了许多居民的生活。",
    answers: [
        { option: "A", answer: "tireless", chinese_answer: "不知疲倦", chinese_romanization: "bù zhī píjuàn" },
        { option: "B", answer: "lethargic", chinese_answer: "昏昏欲睡", chinese_romanization: "hūnhūn yù shuì" },
        { option: "C", answer: "occasional", chinese_answer: "偶尔", chinese_romanization: "ǒu'ěr" },
        { option: "D", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'tireless' means showing great energy and persistence; never seeming to get tired." +
        "<br><br>" +
        "(B) 'lethargic' means sluggish and apathetic." +
        "<br><br>" +
        "(C) 'occasional' means occurring or appearing at irregular or infrequent intervals." +
        "<br><br>" +
        "(D) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated.",
    chinese_explanation: "(A) '不知疲倦' 意味着表现出极大的精力和毅力；似乎从不疲倦。" +
        "<br><br>" +
        "(B) '昏昏欲睡' 意味着懒洋洋的，无精打采的。" +
        "<br><br>" +
        "(C) '偶尔' 意味着不定期或不频繁出现。" +
        "<br><br>" +
        "(D) '零星' 意味着不定期发生或只在少数地方发生；分散的或孤立的。"
    },
    {
        id: 5,
    question: "The __________ debate left both sides feeling angry and unwilling to compromise.",
    chinese_question: "这场__________的辩论使双方都感到愤怒，不愿意妥协。",
    answers: [
        { option: "A", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
        { option: "B", answer: "amicable", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" },
        { option: "C", answer: "rancorous", chinese_answer: "怨恨的", chinese_romanization: "yuànhèn de" },
        { option: "D", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'rancorous' means characterized by bitterness or resentment. Figuratively, it can mean being full of anger and hostility." +
        "<br><br>" +
        "(A) 'friendly' means kind and pleasant." +
        "<br><br>" +
        "(B) 'amicable' means having a spirit of friendliness; without serious disagreement or rancor." +
        "<br><br>" +
        "(D) 'harmonious' means forming a pleasing or consistent whole.",
    chinese_explanation: "(C) '怨恨的'一词意味着充满苦涩或怨恨的。比喻地，它可以表示充满愤怒和敌意的。" +
        "<br><br>" +
        "(A) '友好的' 意味着友好和愉快的。" +
        "<br><br>" +
        "(B) '友善的' 意味着具有友好精神的；没有严重分歧或怨恨的。" +
        "<br><br>" +
        "(D) '和谐的' 意味着形成一个令人愉快或一致的整体的。"
    },
    {
        id: 6,
        question: "His __________ nature made it difficult for anyone to trust him with important responsibilities.",
        chinese_question: "他 __________ 的本性使得任何人都难以信任他承担重要责任。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "B", answer: "perfidious", chinese_answer: "背信弃义的", chinese_romanization: "bèixìn qìyì de" },
            { option: "C", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "D", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perfidious' means deceitful and untrustworthy." +
            "<br><br>" +
            "(A) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(C) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(D) 'reliable' means consistently good in quality or performance; able to be trusted.",
        chinese_explanation: "(B) '背信弃义的' 意味着欺骗和不可信的。" +
            "<br><br>" +
            "(A) '诚实的' 意味着没有欺骗和虚假；真诚的。" +
            "<br><br>" +
            "(C) '真诚的' 意味着没有伪装或欺骗的；源自真实感情的。" +
            "<br><br>" +
            "(D) '可靠的' 意味着质量或性能始终如一；值得信赖的。"
    },
    {
        id: 7,
        question: "His __________ gift showed how much he had been paying attention to her interests and preferences.",
        chinese_question: "他的 __________ 礼物显示了他是多么关注她的兴趣和偏好。",
        answers: [
            { option: "A", answer: "thoughtless", chinese_answer: "欠考虑", chinese_romanization: "qiàn kǎolǜ" },
            { option: "B", answer: "generic", chinese_answer: "通用", chinese_romanization: "tōngyòng" },
            { option: "C", answer: "thoughtful", chinese_answer: "体贴", chinese_romanization: "tǐtiē" },
            { option: "D", answer: "impulsive", chinese_answer: "冲动", chinese_romanization: "chōngdòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thoughtful' means showing consideration for the needs of other people." +
            "<br><br>" +
            "(A) 'thoughtless' means without consideration for others." +
            "<br><br>" +
            "(B) 'generic' means characteristic of or relating to a class or group; not specific." +
            "<br><br>" +
            "(D) 'impulsive' means acting or done without forethought.",
        chinese_explanation: "(C) '体贴' 意味着为他人的需求着想。" +
            "<br><br>" +
            "(A) '欠考虑' 意味着没有为他人着想。" +
            "<br><br>" +
            "(B) '通用' 意味着属于或有关某一类或某一群体的；不具体的。" +
            "<br><br>" +
            "(D) '冲动' 意味着没有深思熟虑的行动或行为。"
    },
    {
        id: 8,
    question: "The amount of ingredients needed for the recipe is __________ to the number of servings you want to make.",
    chinese_question: "配方所需的成分数量与您想要制作的份数是 __________ 的。",
    answers: [
        { option: "A", answer: "proportional", chinese_answer: "成比例的", chinese_romanization: "chéng bǐlì de" },
        { option: "B", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" },
        { option: "C", answer: "disproportionate", chinese_answer: "不成比例的", chinese_romanization: "bù chéng bǐlì de" },
        { option: "D", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'proportional' means corresponding in size or amount to something else." +
        "<br><br>" +
        "(B) 'inconsistent' means not staying the same throughout." +
        "<br><br>" +
        "(C) 'disproportionate' means too large or too small in comparison with something else." +
        "<br><br>" +
        "(D) 'irrelevant' means not connected with or relevant to something.",
    chinese_explanation: "(A) '成比例的' 意味着在大小或数量上与其他事物相对应的。" +
        "<br><br>" +
        "(B) '不一致的' 意味着不始终保持相同的。" +
        "<br><br>" +
        "(C) '不成比例的' 意味着与其他事物相比过大或过小的。" +
        "<br><br>" +
        "(D) '无关的' 意味着与某事无关的。"
    },
    {
        id: 9,
        question: "The __________ nature of his speech made the audience ponder deeply about their own lives.",
        chinese_question: "他演讲的 __________ 性质使观众深思自己的生活。",
        answers: [
            { option: "A", answer: "thoughtless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "reflective", chinese_answer: "深思的", chinese_romanization: "shēnsī de" },
            { option: "C", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reflective' means relating to or characterized by deep thought; thoughtful." +
            "<br><br>" +
            "(A) 'thoughtless' means without consideration of the possible consequences." +
            "<br><br>" +
            "(C) 'shallow' means of little depth." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(B) '深思的' 意味着与深思熟虑有关的或具有深思熟虑特点的；深思的。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有考虑可能的后果的。" +
            "<br><br>" +
            "(C) '浅薄的' 意味着深度很小的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面上的。"
    },
    {
        id: 10,
    question: "Her __________ negotiation skills helped secure a favorable deal for the company.",
    chinese_question: "她 __________ 的谈判技巧帮助公司达成了有利的协议。",
    answers: [
        { option: "A", answer: "shrewd", chinese_answer: "精明", chinese_romanization: "jīngmíng" },
        { option: "B", answer: "clumsy", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
        { option: "C", answer: "impulsive", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
        { option: "D", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'shrewd' means having or showing sharp powers of judgment; astute." +
        "<br><br>" +
        "(B) 'clumsy' means awkward in movement or in handling things." +
        "<br><br>" +
        "(C) 'impulsive' means acting or done without forethought." +
        "<br><br>" +
        "(D) 'reckless' means without thinking or caring about the consequences of an action.",
    chinese_explanation: "(A) '精明' 意味着拥有或表现出敏锐的判断力；精明。" +
        "<br><br>" +
        "(B) '笨拙' 意味着在动作或处理事情上笨拙。" +
        "<br><br>" +
        "(C) '冲动' 意味着在没有深思熟虑的情况下行动或完成。" +
        "<br><br>" +
        "(D) '鲁莽' 意味着不考虑行动的后果。"
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
