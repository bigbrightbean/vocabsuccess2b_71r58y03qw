// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "He adopted a __________ attitude toward his boss, always agreeing with her and constantly flattering her, even when she was clearly wrong, to ensure he stayed in her good graces.",
    chinese_question: "他对老板采取了一种 __________ 的态度，总是同意她的意见，不断拍她的马屁，即使她明显错了，也这样做，以确保自己受到她的青睐。",
    answers: [
        { option: "A", answer: "servile", chinese_answer: "奴性的", chinese_romanization: "núxìng de" },
        { option: "B", answer: "assertive", chinese_answer: "坚定自信的", chinese_romanization: "jiāndìng zìxìn de" },
        { option: "C", answer: "independent", chinese_answer: "独立的", chinese_romanization: "dúlì de" },
        { option: "D", answer: "defiant", chinese_answer: "挑衅的", chinese_romanization: "tiǎoxìn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'servile' means having or showing an excessive willingness to serve or please others." +
        "<br><br>" +
        "(B) 'assertive' means having or showing a confident and forceful personality." +
        "<br><br>" +
        "(C) 'independent' means free from outside control; not depending on another's authority." +
        "<br><br>" +
        "(D) 'defiant' means showing open resistance or bold disobedience.",
    chinese_explanation: "(A) '奴性的' 意味着表现出过度愿意服务或取悦他人的。" +
        "<br><br>" +
        "(B) '坚定自信的' 意味着表现出自信和有力的个性。" +
        "<br><br>" +
        "(C) '独立的' 意味着不受外部控制的；不依赖于他人的权威的。" +
        "<br><br>" +
        "(D) '挑衅的' 意味着表现出公开的抵抗或大胆的不服从的。"
    },
    {
        id: 2,
    question: "The town was known for its __________ fog, which blanketed the streets and made the mornings feel eerie and mysterious.",
    chinese_question: "这个小镇以 __________ 的雾气闻名，雾气笼罩着街道，使早晨感觉既神秘又怪异。",
    answers: [
        { option: "A", answer: "perpetual", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
        { option: "B", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
        { option: "C", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
        { option: "D", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'perpetual' means never ending or changing; continuous." +
        "<br><br>" +
        "(B) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
        "<br><br>" +
        "(C) 'temporary' means lasting for only a limited period of time; not permanent." +
        "<br><br>" +
        "(D) 'intermittent' means occurring at irregular intervals; not continuous or steady.",
    chinese_explanation: "(A) '永久的' 意味着永不结束或改变的；持续的。" +
        "<br><br>" +
        "(B) '偶尔的' 意味着不频繁和不规律地发生、出现或完成的。" +
        "<br><br>" +
        "(C) '暂时的' 意味着只持续有限时间的；非永久的。" +
        "<br><br>" +
        "(D) '间歇的' 意味着不定期发生的；不连续或不稳定的。"
    },
    {
        id: 3,
        question: "His __________ manner during the conversation indicated he was thinking about something else entirely.",
        chinese_question: "他在谈话中的 __________ 态度表明他完全在想着别的事情。",
        answers: [
            { option: "A", answer: "engaged", chinese_answer: "投入的", chinese_romanization: "tóurù de" },
            { option: "B", answer: "preoccupied", chinese_answer: "心不在焉的", chinese_romanization: "xīn bù zài yān de" },
            { option: "C", answer: "interested", chinese_answer: "感兴趣的", chinese_romanization: "gǎn xìngqù de" },
            { option: "D", answer: "focused", chinese_answer: "集中的", chinese_romanization: "jízhōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'preoccupied' means engrossed in thought; distracted." +
            "<br><br>" +
            "(A) 'engaged' means busy or occupied; involved." +
            "<br><br>" +
            "(C) 'interested' means showing curiosity or concern about something." +
            "<br><br>" +
            "(D) 'focused' means directing a great deal of attention, interest, or activity towards a particular aim.",
        chinese_explanation: "(B) '心不在焉的' 意味着沉浸在思考中；心不在焉的。" +
            "<br><br>" +
            "(A) '投入的' 意味着忙碌的或占据的；参与的。" +
            "<br><br>" +
            "(C) '感兴趣的' 意味着对某事表现出好奇或关心的。" +
            "<br><br>" +
            "(D) '集中的' 意味着将大量注意力、兴趣或活动集中在特定目标上。"
    },
    {
        id: 4,
        question: "The issue of climate change has become a __________ topic in global discussions.",
        chinese_question: "气候变化问题已成为全球讨论中的 __________ 话题。",
        answers: [
            { option: "A", answer: "momentary", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "B", answer: "fleeting", chinese_answer: "瞬间的", chinese_romanization: "shùnjiān de" },
            { option: "C", answer: "perennial", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
            { option: "D", answer: "transient", chinese_answer: "暂时的", chinese_romanization: "zànshí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perennial' means lasting or existing for a long or apparently infinite time; enduring or continually recurring." +
            "<br><br>" +
            "(A) 'momentary' means lasting for a very short time; brief." +
            "<br><br>" +
            "(B) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(D) 'transient' means lasting only for a short time; impermanent.",
        chinese_explanation: "(C) '持久的' 意味着持续或存在很长时间或看似无限时间的；持久的或不断重复的。" +
            "<br><br>" +
            "(A) '短暂的' 意味着持续时间非常短的。" +
            "<br><br>" +
            "(B) '瞬间的' 意味着持续时间非常短的；简短的。" +
            "<br><br>" +
            "(D) '暂时的' 意味着只持续短时间的；不永久的。"
    },
    {
        id: 5,
    question: "His __________ methods in teaching sparked a lot of interest among students.",
    chinese_question: "他__________的教学方法引起了学生们的极大兴趣。",
    answers: [
        { option: "A", answer: "conventional", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
        { option: "B", answer: "unorthodox", chinese_answer: "非正统的", chinese_romanization: "fēi zhèngtǒng de" },
        { option: "C", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "D", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'unorthodox' means contrary to what is usual, traditional, or accepted." +
        "<br><br>" +
        "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
        "<br><br>" +
        "(C) 'traditional' means existing in or as part of a tradition; long-established." +
        "<br><br>" +
        "(D) 'standard' means used or accepted as normal or average.",
    chinese_explanation: "(B) '非正统的'一词意味着与通常、传统或被接受的相反的。" +
        "<br><br>" +
        "(A) '常规的' 意味着基于或符合普遍做法或信仰的。" +
        "<br><br>" +
        "(C) '传统的' 意味着存在于或作为传统的一部分；长期存在的。" +
        "<br><br>" +
        "(D) '标准的' 意味着被用作正常或平均的。"
    },
    {
        id: 6,
        question: "Her __________ hints about the surprise party were so delicate that he never suspected anything until the day of the event.",
        chinese_question: "她对惊喜派对的 __________ 暗示如此细腻，以至于他直到活动当天都没有怀疑任何事情。",
        answers: [
            { option: "A", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "B", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "C", answer: "blatant", chinese_answer: "明目张胆的", chinese_romanization: "míngmùzhāngdǎn de" },
            { option: "D", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'subtle' means delicately complex and understated." +
            "<br><br>" +
            "(B) 'direct' means straightforward and honest." +
            "<br><br>" +
            "(C) 'blatant' means (of bad behavior) done openly and unashamedly." +
            "<br><br>" +
            "(D) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt.",
        chinese_explanation: "(A) '微妙的' 意味着细腻复杂且低调的。" +
            "<br><br>" +
            "(B) '直接的' 意味着坦率和诚实的。" +
            "<br><br>" +
            "(C) '明目张胆的' 意味着（不良行为）公开无耻地进行的。" +
            "<br><br>" +
            "(D) '明确的' 意味着清晰详细地陈述的，不留混淆或疑虑的。"
    },
    {
        id: 7,
    question: "She is known for being extremely __________, always arriving at meetings exactly on time.",
    chinese_question: "她以极其 __________ 而闻名，总是在会议开始时准时到达。",
    answers: [
        { option: "A", answer: "punctual", chinese_answer: "准时的", chinese_romanization: "zhǔnshí de" },
        { option: "B", answer: "tardy", chinese_answer: "迟到的", chinese_romanization: "chídào de" },
        { option: "C", answer: "irregular", chinese_answer: "不规律的", chinese_romanization: "bù guīlǜ de" },
        { option: "D", answer: "late", chinese_answer: "迟到的", chinese_romanization: "chídào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'punctual' means happening or doing something at the agreed or proper time; on time." +
        "<br><br>" +
        "(B) 'tardy' means delaying or delayed beyond the right or expected time." +
        "<br><br>" +
        "(C) 'irregular' means not even or balanced in shape or arrangement." +
        "<br><br>" +
        "(D) 'late' means coming after the expected, proper, or usual time.",
    chinese_explanation: "(A) '准时的' 意味着在约定或适当时间发生或做某事；准时的。" +
        "<br><br>" +
        "(B) '迟到的' 意味着超过正确或预期时间的延迟。" +
        "<br><br>" +
        "(C) '不规律的' 意味着形状或排列不均匀或不平衡的。" +
        "<br><br>" +
        "(D) '迟到的' 意味着在预期、适当或通常时间之后到来的。"
    },
    {
        id: 8,
    question: "Being __________ of the cultural differences, he approached the situation with sensitivity and respect.",
    chinese_question: "由于 __________ 文化差异，他以敏感和尊重的态度处理了这种情况。",
    answers: [
        { option: "A", answer: "oblivious", chinese_answer: "不注意的", chinese_romanization: "bù zhùyì de" },
        { option: "B", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
        { option: "C", answer: "mindful", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
        { option: "D", answer: "unaware", chinese_answer: "没有意识到的", chinese_romanization: "méiyǒu yìshí dào de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mindful' means conscious or aware of something. Figuratively, it can mean being considerate and thoughtful." +
        "<br><br>" +
        "(A) 'oblivious' means not aware of or not concerned about what is happening around one." +
        "<br><br>" +
        "(B) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
        "<br><br>" +
        "(D) 'unaware' means having no knowledge of a situation or fact.",
    chinese_explanation: "(C) '注意的' 意味着对某事有意识或意识到的。比喻地，它可以表示体贴和周到的。" +
        "<br><br>" +
        "(A) '不注意的' 意味着没有意识到或不关心周围发生的事情。" +
        "<br><br>" +
        "(B) '无知的' 意味着总体上缺乏知识或意识的；未受教育的或不复杂的。" +
        "<br><br>" +
        "(D) '没有意识到的' 意味着不知道某种情况或事实的。"
    },
    {
        id: 9,
    question: "Her contributions to the project were far from __________; they made a big difference.",
    chinese_question: "她对项目的贡献远非__________；它们产生了很大的影响。",
    answers: [
        { option: "A", answer: "large", chinese_answer: "大量的", chinese_romanization: "dàliàng de" },
        { option: "B", answer: "substantial", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
        { option: "C", answer: "inconsiderable", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
        { option: "D", answer: "significant", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'inconsiderable' means small in size, amount, or degree. Figuratively, it can mean something that is negligible or unimportant." +
        "<br><br>" +
        "(A) 'large' means of considerable or relatively great size, extent, or capacity." +
        "<br><br>" +
        "(B) 'substantial' means of considerable importance, size, or worth." +
        "<br><br>" +
        "(D) 'significant' means sufficiently great or important to be worthy of attention; noteworthy.",
    chinese_explanation: "(C) '微不足道的'一词意味着大小、数量或程度很小。比喻地，它可以表示可以忽略或不重要的事物。" +
        "<br><br>" +
        "(A) '大量的' 意味着相当或相对较大的大小、范围或容量。" +
        "<br><br>" +
        "(B) '重要的' 意味着相当重要的、大小的或价值的。" +
        "<br><br>" +
        "(D) '显著的' 意味着足够重要或值得关注；值得注意的。"
    },
    {
        id: 10,
    question: "The __________ conditions of the abandoned house made it uninhabitable, with broken windows and a leaking roof.",
    chinese_question: "废弃房屋的 __________ 状况使其无法居住，窗户破碎，屋顶漏水。",
    answers: [
        { option: "A", answer: "luxurious", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
        { option: "B", answer: "pristine", chinese_answer: "原始的", chinese_romanization: "yuánshǐ de" },
        { option: "C", answer: "wretched", chinese_answer: "糟糕的", chinese_romanization: "zāogāo de" },
        { option: "D", answer: "immaculate", chinese_answer: "无瑕的", chinese_romanization: "wúxiá de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'wretched' means in a very unhappy or unfortunate state; of poor quality." +
        "<br><br>" +
        "(A) 'luxurious' means extremely comfortable, elegant, or enjoyable." +
        "<br><br>" +
        "(B) 'pristine' means in its original condition; unspoiled." +
        "<br><br>" +
        "(D) 'immaculate' means perfectly clean, neat, or tidy.",
    chinese_explanation: "(C) '糟糕的' 意味着处于非常不快乐或不幸的状态；质量差的。" +
        "<br><br>" +
        "(A) '奢华的' 意味着极为舒适、优雅或愉悦的。" +
        "<br><br>" +
        "(B) '原始的' 意味着处于其原始状态；未被破坏的。" +
        "<br><br>" +
        "(D) '无瑕的' 意味着完全干净、整洁或整齐的。"
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
