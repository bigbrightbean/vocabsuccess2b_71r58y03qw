// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ manner alienated many of her colleagues who found her insufferable.",
        chinese_question: "她那__________的态度疏远了许多同事，他们觉得她难以忍受。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "modest", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "C", answer: "pompous", chinese_answer: "浮夸的", chinese_romanization: "fúkuā de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pompous' means affectedly and irritatingly grand, solemn, or self-important. Figuratively, it can mean being overly arrogant or pretentious." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(B) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '浮夸的'一词意味着装腔作势和恼人的盛大、庄严或自大的。比喻地，它可以表示过于傲慢或自负。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的重要性有或表现出谦逊或低估的。" +
            "<br><br>" +
            "(B) '谦逊的' 意味着对自己的能力或成就不自大的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有困难的。"
    },
    {
        id: 2,
    question: "His __________ steps towards the podium showed his nervousness about speaking in front of the large audience.",
    chinese_question: "他走向讲台的 __________ 步伐显示了他在大庭广众前讲话的紧张。",
    answers: [
        { option: "A", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
        { option: "B", answer: "tentative", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
        { option: "C", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
        { option: "D", answer: "assured", chinese_answer: "确定的", chinese_romanization: "quèdìng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'tentative' means done without confidence; hesitant." +
        "<br><br>" +
        "(A) 'confident' means feeling or showing confidence in oneself; self-assured." +
        "<br><br>" +
        "(C) 'bold' means showing a willingness to take risks; confident and courageous." +
        "<br><br>" +
        "(D) 'assured' means confident and certain.",
    chinese_explanation: "(B) '犹豫的' 意味着缺乏自信地做；犹豫的。" +
        "<br><br>" +
        "(A) '自信的' 意味着对自己有信心的；自信的。" +
        "<br><br>" +
        "(C) '大胆的' 意味着愿意冒险的；自信和勇敢的。" +
        "<br><br>" +
        "(D) '确定的' 意味着自信和肯定的。"
    },
    {
        id: 3,
        question: "It seems __________ that the more he tried to simplify the process, the more complicated it became.",
        chinese_question: "他越是试图简化这个过程，结果变得越复杂，这似乎是 __________ 的。",
        answers: [
            { option: "A", answer: "straightforward", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "B", answer: "logical", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "C", answer: "paradoxical", chinese_answer: "矛盾的", chinese_romanization: "máodùn de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'paradoxical' means seemingly absurd or self-contradictory." +
            "<br><br>" +
            "(A) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(B) 'logical' means of or according to the rules of logic or formal argument." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '矛盾的' 意味着看似荒谬或自相矛盾的。" +
            "<br><br>" +
            "(A) '直接的' 意味着不复杂且容易做或理解的。" +
            "<br><br>" +
            "(B) '合理的' 意味着符合逻辑规则或正式论证的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有困难的。"
    },
    {
        id: 4,
        question: "The chef was __________ in French cuisine, having trained under several renowned chefs in Paris.",
        chinese_question: "这位厨师在法式料理方面非常 __________，曾在巴黎的几位著名厨师手下接受过训练。",
        answers: [
            { option: "A", answer: "novice", chinese_answer: "新手的", chinese_romanization: "xīnshǒu de" },
            { option: "B", answer: "proficient", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "C", answer: "untrained", chinese_answer: "未受训练的", chinese_romanization: "wèi shòu xùnliàn de" },
            { option: "D", answer: "amateur", chinese_answer: "业余的", chinese_romanization: "yèyú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'proficient' means competent or skilled in doing or using something." +
            "<br><br>" +
            "(A) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(C) 'untrained' means not having been trained for a particular job or activity." +
            "<br><br>" +
            "(D) 'amateur' means engaging or engaged in without payment; non-professional.",
        chinese_explanation: "(B) '熟练的' 意味着在做某事或使用某物方面有能力或技能的。" +
            "<br><br>" +
            "(A) '新手的' 意味着在某个领域或情况下新手或没有经验的人。" +
            "<br><br>" +
            "(C) '未受训练的' 意味着没有接受过特定工作或活动的培训的。" +
            "<br><br>" +
            "(D) '业余的' 意味着不收取报酬的参与或从事的；非专业的。"
    },
    {
        id: 5,
    question: "The movie was criticized for its __________ plot, which failed to captivate the audience.",
    chinese_question: "这部电影因其 __________ 的情节而受到批评，未能吸引观众。",
    answers: [
        { option: "A", answer: "complex", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
        { option: "B", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
        { option: "C", answer: "intricate", chinese_answer: "错综复杂的", chinese_romanization: "cuòzōngfùzá de" },
        { option: "D", answer: "engaging", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'mundane' means lacking interest or excitement; dull." +
        "<br><br>" +
        "(A) 'complex' means consisting of many different and connected parts." +
        "<br><br>" +
        "(C) 'intricate' means very complicated or detailed." +
        "<br><br>" +
        "(D) 'engaging' means charming and attractive.",
    chinese_explanation: "(B) '平凡的' 意味着缺乏兴趣或兴奋；乏味的。" +
        "<br><br>" +
        "(A) '复杂的' 意味着由许多不同且相互连接的部分组成的。" +
        "<br><br>" +
        "(C) '错综复杂的' 意味着非常复杂或详细的。" +
        "<br><br>" +
        "(D) '吸引人的' 意味着迷人和有吸引力的。"
    },
    {
        id: 6,
    question: "Her __________ treatment of the guests was evident in the dirty dishes and unkempt house.",
    chinese_question: "她对客人的 __________ 招待表现在脏盘子和凌乱的房子上。",
    answers: [
        { option: "A", answer: "shabby", chinese_answer: "糟糕", chinese_romanization: "zāogāo" },
        { option: "B", answer: "hospitable", chinese_answer: "好客", chinese_romanization: "hàokè" },
        { option: "C", answer: "gracious", chinese_answer: "亲切", chinese_romanization: "qīnqiè" },
        { option: "D", answer: "courteous", chinese_answer: "礼貌", chinese_romanization: "lǐmào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'shabby' means in poor condition through long use or lack of care." +
        "<br><br>" +
        "(B) 'hospitable' means friendly and welcoming to strangers or guests." +
        "<br><br>" +
        "(C) 'gracious' means courteous, kind, and pleasant." +
        "<br><br>" +
        "(D) 'courteous' means polite, respectful, or considerate in manner.",
    chinese_explanation: "(A) '糟糕' 意味着由于长期使用或缺乏维护而处于糟糕的状态。" +
        "<br><br>" +
        "(B) '好客' 意味着对陌生人或客人友好和热情。" +
        "<br><br>" +
        "(C) '亲切' 意味着有礼貌、友好和愉快。" +
        "<br><br>" +
        "(D) '礼貌' 意味着举止礼貌、尊重或考虑周到。"
    },
    {
        id: 7,
    question: "His __________ personality made him the life of every party he attended.",
    chinese_question: "他 __________ 的个性使他成为每个派对的灵魂人物。",
    answers: [
        { option: "A", answer: "reserved", chinese_answer: "矜持", chinese_romanization: "jīnchí" },
        { option: "B", answer: "shy", chinese_answer: "害羞", chinese_romanization: "hàixiū" },
        { option: "C", answer: "flamboyant", chinese_answer: "华丽", chinese_romanization: "huálì" },
        { option: "D", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'flamboyant' means tending to attract attention because of their exuberance, confidence, and stylishness." +
        "<br><br>" +
        "(A) 'reserved' means slow to reveal emotion or opinions." +
        "<br><br>" +
        "(B) 'shy' means being reserved or having or showing nervousness or timidity in the company of other people." +
        "<br><br>" +
        "(D) 'timid' means showing a lack of courage or confidence; easily frightened.",
    chinese_explanation: "(C) '华丽' 意味着由于其丰富、自信和时尚而倾向于引起注意。" +
        "<br><br>" +
        "(A) '矜持' 意味着慢于表达情感或意见。" +
        "<br><br>" +
        "(B) '害羞' 意味着在他人面前表现出保留或表现出紧张或胆怯。" +
        "<br><br>" +
        "(D) '胆小' 意味着表现出缺乏勇气或信心；容易受到惊吓。"
    },
    {
        id: 8,
    question: "The __________ charm of the small village made it a popular destination for city dwellers looking to escape the hustle and bustle.",
    chinese_question: "这个小村庄的 __________ 魅力使其成为城市居民逃离喧嚣的热门目的地。",
    answers: [
        { option: "A", answer: "urban", chinese_answer: "城市的", chinese_romanization: "chéngshì de" },
        { option: "B", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
        { option: "C", answer: "rural", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" },
        { option: "D", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'rural' means relating to, or characteristic of the countryside rather than the town." +
        "<br><br>" +
        "(A) 'urban' means relating to, or characteristic of a city or town." +
        "<br><br>" +
        "(B) 'modern' means relating to the present or recent times as opposed to the remote past." +
        "<br><br>" +
        "(D) 'contemporary' means living or occurring at the same time.",
    chinese_explanation: "(C) '乡村的' 意味着与乡村而不是城镇相关或具有乡村特点的。" +
        "<br><br>" +
        "(A) '城市的' 意味着与城市或城镇相关或具有城市特点的。" +
        "<br><br>" +
        "(B) '现代的' 意味着与现在或最近的时间有关，而不是遥远的过去。" +
        "<br><br>" +
        "(D) '当代的' 意味着在同一时间生活或发生的。"
    },
    {
        id: 9,
    question: "The actor's __________ performance made the audience fall in love with his character.",
    chinese_question: "这位演员的 __________ 表演让观众爱上了他的角色。",
    answers: [
        { option: "A", answer: "endearing", chinese_answer: "讨人喜欢", chinese_romanization: "tǎo rén xǐhuān" },
        { option: "B", answer: "harsh", chinese_answer: "刺耳", chinese_romanization: "cì'ěr" },
        { option: "C", answer: "forgettable", chinese_answer: "易忘", chinese_romanization: "yì wàng" },
        { option: "D", answer: "tedious", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'endearing' means inspiring affection." +
        "<br><br>" +
        "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
        "<br><br>" +
        "(C) 'forgettable' means easily forgotten, especially through being uninteresting or mediocre." +
        "<br><br>" +
        "(D) 'tedious' means too long, slow, or dull; tiresome or monotonous.",
    chinese_explanation: "(A) '讨人喜欢' 意味着激发喜爱的。" +
        "<br><br>" +
        "(B) '刺耳' 意味着不愉快地粗糙或刺耳。" +
        "<br><br>" +
        "(C) '易忘' 意味着容易被遗忘，尤其是因为没有趣或平庸。" +
        "<br><br>" +
        "(D) '冗长' 意味着太长、太慢或太沉闷；乏味或单调。"
    },
    {
        id: 10,
    question: "The politician's __________ response to the crisis was criticized for lacking empathy and urgency.",
    chinese_question: "这位政治家对危机的 __________ 反应因缺乏同情心和紧迫感而受到批评。",
    answers: [
        { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "fervent", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
        { option: "C", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsībùgǒu de" },
        { option: "D", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
        "<br><br>" +
        "(B) 'fervent' means having or displaying a passionate intensity." +
        "<br><br>" +
        "(C) 'meticulous' means showing great attention to detail." +
        "<br><br>" +
        "(D) 'impulsive' means acting or done without forethought.",
    chinese_explanation: "(A) '冷漠的' 意味着没有表现出或感到兴趣、热情或关心。" +
        "<br><br>" +
        "(B) '热情的' 意味着拥有或展示出强烈的激情。" +
        "<br><br>" +
        "(C) '一丝不苟的' 意味着非常注意细节。" +
        "<br><br>" +
        "(D) '冲动的' 意味着未经深思熟虑就行动或做出的。"
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
