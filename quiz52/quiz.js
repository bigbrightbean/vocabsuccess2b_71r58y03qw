// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The novel’s __________ was its strength, as it delivered a powerful message without unnecessary details.",
        chinese_question: "这部小说的 __________ 是其强项，因为它在没有不必要细节的情况下传达了一个强有力的信息。",
        answers: [
                { option: "A", answer: "verbosity", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
                { option: "B", answer: "brevity", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
                { option: "C", answer: "length", chinese_answer: "长度", chinese_romanization: "chángdù" },
                { option: "D", answer: "complexity", chinese_answer: "复杂性", chinese_romanization: "fùzáxìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'brevity' means concise and exact use of words in writing or speech." +
                "<br><br>" +
                "(A) 'verbosity' means the quality of using more words than needed; wordiness." +
                "<br><br>" +
                "(C) 'length' means the measurement or extent of something from end to end." +
                "<br><br>" +
                "(D) 'complexity' means the state or quality of being intricate or complicated.",
        chinese_explanation: "(B) '简洁'一词意味着在写作或讲话中使用简明准确的词语。" +
                "<br><br>" +
                "(A) '冗长' 意味着使用比需要更多的词；多话。" +
                "<br><br>" +
                "(C) '长度' 意味着从一端到另一端的测量或范围。" +
                "<br><br>" +
                "(D) '复杂性' 意味着错综复杂或复杂的状态或质量。"
    },
    {
        id: 2,
        question: "The young recruit's __________ made him an easy target for the seasoned pranksters in the army.",
        chinese_question: "这名年轻新兵的 __________ 使他成为军队中老练恶作剧者的目标。",
        answers: [
                { option: "A", answer: "wisdom", chinese_answer: "智慧", chinese_romanization: "zhìhuì" },
                { option: "B", answer: "naivete", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
                { option: "C", answer: "experience", chinese_answer: "经验", chinese_romanization: "jīngyàn" },
                { option: "D", answer: "suspicion", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'naivete' means a lack of experience, wisdom, or judgment; innocence or gullibility." +
                "<br><br>" +
                "(A) 'wisdom' means the quality of having experience, knowledge, and good judgment." +
                "<br><br>" +
                "(C) 'experience' means practical contact with and observation of facts or events." +
                "<br><br>" +
                "(D) 'suspicion' means a feeling or thought that something is possible, likely, or true.",
        chinese_explanation: "(B) '天真'一词意味着缺乏经验、智慧或判断；天真或轻信。" +
                "<br><br>" +
                "(A) '智慧' 意味着具有经验、知识和良好判断力的品质。" +
                "<br><br>" +
                "(C) '经验' 意味着对事实或事件的实际接触和观察。" +
                "<br><br>" +
                "(D) '怀疑' 意味着某事可能、可能或真实的感觉或想法。"
    },
    {
        id: 3,
    question: "The unexpected results led to a __________ of the experimental procedure to determine what went wrong.",
    chinese_question: "意外的结果导致对实验程序进行 __________，以确定出了什么问题。",
    answers: [
        { option: "A", answer: "reconsideration", chinese_answer: "重新考虑", chinese_romanization: "chóngxīn kǎolǜ" },
        { option: "B", answer: "affirmation", chinese_answer: "确认", chinese_romanization: "quèrèn" },
        { option: "C", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
        { option: "D", answer: "continuation", chinese_answer: "继续", chinese_romanization: "jìxù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reconsideration' figuratively means the action of considering something again or differently." +
        "<br><br>" +
        "(B) 'affirmation' means the action or process of affirming something." +
        "<br><br>" +
        "(C) 'dismissal' means the act of ordering or allowing someone to leave." +
        "<br><br>" +
        "(D) 'continuation' means the action of carrying something on over a period of time or the state of remaining in a particular condition.",
    chinese_explanation: "(A) '重新考虑' 在此语境下意指再次或以不同方式考虑某事的行为。" +
        "<br><br>" +
        "(B) '确认' 意味着确认某事的行为或过程。" +
        "<br><br>" +
        "(C) '解雇' 意味着命令或允许某人离开的行为。" +
        "<br><br>" +
        "(D) '继续' 意味着在一段时间内继续进行某事的动作或保持某一状态。"
    },
    {
        id: 4,
    question: "The judge's __________ was crucial in ensuring a fair trial, where all evidence was considered impartially.",
    chinese_question: "法官的 __________ 对确保公正审判至关重要，所有证据都被公正地考虑。",
    answers: [
        { option: "A", answer: "creativity", chinese_answer: "创造力", chinese_romanization: "chuàngzào lì" },
        { option: "B", answer: "subjectivity", chinese_answer: "主观性", chinese_romanization: "zhǔguān xìng" },
        { option: "C", answer: "objectivity", chinese_answer: "客观性", chinese_romanization: "kèguān xìng" },
        { option: "D", answer: "curiosity", chinese_answer: "好奇心", chinese_romanization: "hàoqí xīn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'objectivity' means the quality of being objective, unbiased, and not influenced by personal feelings or opinions." +
        "<br><br>" +
        "(A) 'creativity' means the use of imagination or original ideas to create something; inventiveness." +
        "<br><br>" +
        "(B) 'subjectivity' means based on or influenced by personal feelings, tastes, or opinions." +
        "<br><br>" +
        "(D) 'curiosity' means a strong desire to know or learn something.",
    chinese_explanation: "(C) '客观性' 一词意味着客观、公正、不受个人感情或意见影响的品质。" +
        "<br><br>" +
        "(A) '创造力' 意味着使用想象力或原创想法来创造某物；创造力。" +
        "<br><br>" +
        "(B) '主观性' 意味着基于或受个人感情、兴趣或意见影响的。" +
        "<br><br>" +
        "(D) '好奇心' 意味着强烈的求知或学习的欲望。"
    },
    {
        id: 5,
        question: "His __________ for spicy food often led him to seek out the hottest dishes on the menu.",
        chinese_question: "他对辛辣食物的 __________ 经常使他寻找菜单上最辣的菜肴。",
        answers: [
                { option: "A", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
                { option: "B", answer: "penchant", chinese_answer: "嗜好", chinese_romanization: "shìhào" },
                { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
                { option: "D", answer: "dislike", chinese_answer: "反感", chinese_romanization: "fǎngǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'penchant' means a strong or habitual liking for something or tendency to do something." +
                "<br><br>" +
                "(A) 'aversion' means a strong dislike or disinclination." +
                "<br><br>" +
                "(C) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(D) 'dislike' means a feeling of not liking or being opposed to someone or something.",
        chinese_explanation: "(B) '嗜好'一词意味着对某事的强烈或习惯性喜好或倾向于做某事。" +
                "<br><br>" +
                "(A) '厌恶' 意味着强烈的不喜欢或不情愿。" +
                "<br><br>" +
                "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(D) '反感' 意味着不喜欢或反对某人或某事的感觉。"
    },
    {
        id: 6,
    question: "Her __________ for helping others was evident in her volunteer work at the local shelter.",
    chinese_question: "她帮助他人的 __________ 在她在当地庇护所的志愿工作中表现得很明显。",
    answers: [
        { option: "A", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bùqíngyuàn" },
        { option: "B", answer: "inclination", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
        { option: "C", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'inclination' means a natural tendency to act in a particular way." +
        "<br><br>" +
        "(A) 'reluctance' means unwillingness or disinclination to do something." +
        "<br><br>" +
        "(C) 'aversion' means a strong dislike or disinclination." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '倾向' 一词意味着自然的倾向去以某种方式行动。" +
        "<br><br>" +
        "(A) '不情愿' 意味着不愿意或不情愿做某事。" +
        "<br><br>" +
        "(C) '厌恶' 意味着强烈的反感或不情愿。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关注或同情。"
    },
    {
        id: 7,
    question: "The sound of the newborn baby starting to __________ woke the entire household.",
    chinese_question: "新生儿开始 __________ 的声音唤醒了整个家庭。",
    answers: [
        { option: "A", answer: "bark", chinese_answer: "吠叫", chinese_romanization: "fèijiào" },
        { option: "B", answer: "growl", chinese_answer: "咆哮", chinese_romanization: "páoxiào" },
        { option: "C", answer: "mewl", chinese_answer: "喵喵叫", chinese_romanization: "miāomiāo jiào" },
        { option: "D", answer: "roar", chinese_answer: "吼叫", chinese_romanization: "hǒujiào" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mewl' means to cry feebly or querulously like a kitten." +
        "<br><br>" +
        "(A) 'bark' means to make a sharp, loud sound, like a dog." +
        "<br><br>" +
        "(B) 'growl' means to make a low, guttural sound, typically as a sign of hostility." +
        "<br><br>" +
        "(D) 'roar' means to make a loud, deep sound, typically like a lion.",
    chinese_explanation: "(C) '喵喵叫' 一词意味着像小猫一样微弱或抱怨地哭泣。" +
        "<br><br>" +
        "(A) '吠叫' 意味着像狗一样发出尖锐而响亮的声音。" +
        "<br><br>" +
        "(B) '咆哮' 意味着发出低沉的声音，通常表示敌意。" +
        "<br><br>" +
        "(D) '吼叫' 意味着发出响亮而深沉的声音，通常像狮子一样。"
    },
    {
        id: 8,
    question: "The __________ of the nursing home enjoy various activities organized by the staff.",
    chinese_question: "养老院的 __________ 享受由工作人员组织的各种活动。",
    answers: [
        { option: "A", answer: "residents", chinese_answer: "居民", chinese_romanization: "jūmín" },
        { option: "B", answer: "guests", chinese_answer: "客人", chinese_romanization: "kèrén" },
        { option: "C", answer: "employees", chinese_answer: "员工", chinese_romanization: "yuángōng" },
        { option: "D", answer: "administrators", chinese_answer: "管理员", chinese_romanization: "guǎnlǐyuán" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'residents' means people who live somewhere permanently or on a long-term basis." +
        "<br><br>" +
        "(B) 'guests' means people who are invited to visit someone's home or attend a particular social occasion." +
        "<br><br>" +
        "(C) 'employees' means people employed for wages or salary, especially at nonexecutive levels." +
        "<br><br>" +
        "(D) 'administrators' means people responsible for running a business, organization, etc.",
    chinese_explanation: "(A) '居民' 意味着长期或永久居住在某地的人。" +
        "<br><br>" +
        "(B) '客人' 意味着受邀访问某人家或参加特定社交活动的人。" +
        "<br><br>" +
        "(C) '员工' 意味着为工资或薪水而工作的人，特别是在非管理层。" +
        "<br><br>" +
        "(D) '管理员' 意味着负责管理业务、组织等的人。"
    },
    {
        id: 9,
    question: "The scientist was praised for her __________ in presenting the research findings, ensuring that personal biases did not influence the results.",
    chinese_question: "这位科学家因在展示研究结果时的 __________ 而受到赞扬，确保个人偏见不会影响结果。",
    answers: [
        { option: "A", answer: "subjectivity", chinese_answer: "主观性", chinese_romanization: "zhǔguān xìng" },
        { option: "B", answer: "objectivity", chinese_answer: "客观性", chinese_romanization: "kèguān xìng" },
        { option: "C", answer: "curiosity", chinese_answer: "好奇心", chinese_romanization: "hàoqí xīn" },
        { option: "D", answer: "creativity", chinese_answer: "创造力", chinese_romanization: "chuàngzào lì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'objectivity' means the quality of being objective, unbiased, and not influenced by personal feelings or opinions." +
        "<br><br>" +
        "(A) 'subjectivity' means based on or influenced by personal feelings, tastes, or opinions." +
        "<br><br>" +
        "(C) 'curiosity' means a strong desire to know or learn something." +
        "<br><br>" +
        "(D) 'creativity' means the use of imagination or original ideas to create something; inventiveness.",
    chinese_explanation: "(B) '客观性' 一词意味着客观、公正、不受个人感情或意见影响的品质。" +
        "<br><br>" +
        "(A) '主观性' 意味着基于或受个人感情、兴趣或意见影响的。" +
        "<br><br>" +
        "(C) '好奇心' 意味着强烈的求知或学习的欲望。" +
        "<br><br>" +
        "(D) '创造力' 意味着使用想象力或原创想法来创造某物；创造力。"
    },
    {
        id: 10,
    question: "The __________ of the debate left no room for compromise, with both sides firmly entrenched in their positions.",
    chinese_question: "辩论的 __________ 没有留下妥协的余地，双方都坚定地守在自己的立场上。",
    answers: [
        { option: "A", answer: "serenity", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
        { option: "B", answer: "ferocity", chinese_answer: "激烈", chinese_romanization: "jīliè" },
        { option: "C", answer: "calmness", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "D", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ferocity' means the state or quality of being ferocious; fierceness." +
        "<br><br>" +
        "(A) 'serenity' means the state of being calm, peaceful, and untroubled." +
        "<br><br>" +
        "(C) 'calmness' means the state or quality of being free from agitation or strong emotion." +
        "<br><br>" +
        "(D) 'cooperation' means the process of working together to the same end.",
    chinese_explanation: "(B) '激烈' 一词意味着凶猛的状态或品质；激烈。" +
        "<br><br>" +
        "(A) '宁静' 意味着平静、安宁、无忧无虑的状态。" +
        "<br><br>" +
        "(C) '平静' 意味着没有激动或强烈情感的状态或品质。" +
        "<br><br>" +
        "(D) '合作' 意味着共同努力实现同一个目标的过程。"
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
