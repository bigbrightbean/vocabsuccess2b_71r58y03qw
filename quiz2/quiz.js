// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Arguing with him felt __________ because he never listens to anyone else's opinion.",
        chinese_question: "与他争论感觉很 __________，因为他从不听别人的意见。",
        answers: [
            { option: "A", answer: "meaningful", chinese_answer: "有意义的", chinese_romanization: "yǒu yìyì de" },
            { option: "B", answer: "productive", chinese_answer: "富有成效的", chinese_romanization: "fùyǒu chéngxiào de" },
            { option: "C", answer: "important", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "D", answer: "pointless", chinese_answer: "无意义的", chinese_romanization: "wú yìyì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pointless' means having no purpose or effect." +
            "<br><br>" +
            "(A) 'meaningful' means having a serious, important, or useful quality or purpose." +
            "<br><br>" +
            "(B) 'productive' means achieving or producing a significant amount or result." +
            "<br><br>" +
            "(C) 'important' means of great significance or value.",
        chinese_explanation: "(D) '无意义的' 意味着没有目的或效果。" +
            "<br><br>" +
            "(A) '有意义的' 意味着具有严肃、重要或有用的质量或目的。" +
            "<br><br>" +
            "(B) '富有成效的' 意味着实现或产生了显著的数量或结果。" +
            "<br><br>" +
            "(C) '重要的' 意味着具有重大意义或价值。"
    },
    {
        id: 2,
    question: "The __________ software caused the computer to crash frequently, frustrating the users.",
    chinese_question: "这款 __________ 的软件导致电脑频繁崩溃，让用户非常沮丧。",
    answers: [
        { option: "A", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "B", answer: "innovative", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
        { option: "C", answer: "defective", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" },
        { option: "D", answer: "advanced", chinese_answer: "高级", chinese_romanization: "gāojí" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'defective' means having a fault or flaw." +
        "<br><br>" +
        "(A) 'stable' means not likely to change or fail." +
        "<br><br>" +
        "(B) 'innovative' means featuring new methods or ideas." +
        "<br><br>" +
        "(D) 'advanced' means highly developed or complex.",
    chinese_explanation: "(C) “有缺陷” 意味着有故障或瑕疵。" +
        "<br><br>" +
        "(A) '稳定' 意味着不太可能改变或失败。" +
        "<br><br>" +
        "(B) '创新' 意味着采用新方法或新理念。" +
        "<br><br>" +
        "(D) '高级' 意味着高度发达或复杂。"
    },
    {
        id: 3,
    question: "His __________ speech at the funeral moved everyone deeply and brought many to tears.",
    chinese_question: "他在葬礼上的 __________ 演讲深深打动了每个人，并让许多人流下了眼泪。",
    answers: [
        { option: "A", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
        { option: "B", answer: "amusing", chinese_answer: "有趣的", chinese_romanization: "yǒuqù de" },
        { option: "C", answer: "mournful", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" },
        { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mournful' means feeling, expressing, or inducing sadness, regret, or grief." +
        "<br><br>" +
        "(A) 'cheerful' means noticeably happy and optimistic." +
        "<br><br>" +
        "(B) 'amusing' means causing laughter and providing entertainment." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(C) '悲伤的' 意味着感到、表达或引起悲伤、遗憾或悲痛的。" +
        "<br><br>" +
        "(A) '愉快的' 意味着明显的快乐和乐观的。" +
        "<br><br>" +
        "(B) '有趣的' 意味着引起笑声并提供娱乐的。" +
        "<br><br>" +
        "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 4,
        question: "The country went through a __________ period of political upheaval and social unrest.",
        chinese_question: "国家经历了一段 __________ 的政治动荡和社会动乱时期。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "peaceful", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "C", answer: "tumultuous", chinese_answer: "动荡", chinese_romanization: "dòngdàng" },
            { option: "D", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tumultuous' means making a loud, confused noise; uproarious; excited, confused, or disorderly." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(D) 'stable' means not likely to change or fail; firmly established.",
        chinese_explanation: "(C) '动荡' 意味着发出响亮、混乱的声音；喧闹的；兴奋、困惑或无序的。" +
            "<br><br>" +
            "(A) '平静' 意味着不表现或感到紧张、愤怒或其他强烈的情感。" +
            "<br><br>" +
            "(B) '和平' 意味着没有干扰；宁静的。" +
            "<br><br>" +
            "(D) '稳定' 意味着不太可能改变或失败；牢固建立的。"
    },
    {
        id: 5,
        question: "Despite the heated argument, he remained __________, calmly addressing each point without raising his voice.",
        chinese_question: "尽管争论激烈，他依然保持 __________，冷静地回应每一点，没有提高嗓音。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "B", answer: "aggressive", chinese_answer: "侵略性的", chinese_romanization: "qīnlüè xìng de" },
            { option: "C", answer: "gracious", chinese_answer: "和蔼的", chinese_romanization: "hé'ǎi de" },
            { option: "D", answer: "impatient", chinese_answer: "不耐烦的", chinese_romanization: "bù nàifán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gracious' means courteous, kind, and pleasant." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(B) 'aggressive' means ready or likely to attack or confront." +
            "<br><br>" +
            "(D) 'impatient' means having or showing a tendency to be quickly irritated or provoked.",
        chinese_explanation: "(C) '和蔼的' 意味着有礼貌的、善良的和愉快的。" +
            "<br><br>" +
            "(A) '敌对的' 意味着不友好的；敌对的。" +
            "<br><br>" +
            "(B) '侵略性的' 意味着准备或可能攻击或对抗的。" +
            "<br><br>" +
            "(D) '不耐烦的' 意味着有或表现出迅速被激怒或激怒的倾向。"
    },
    {
        id: 6,
        question: "Her __________ gesture of bringing homemade soup to her sick neighbor was deeply appreciated.",
        chinese_question: "她为生病的邻居带来自制汤的 __________ 举动深受感激。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "B", answer: "thoughtful", chinese_answer: "体贴", chinese_romanization: "tǐtiē" },
            { option: "C", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'thoughtful' means showing consideration for the needs of other people." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '体贴' 意味着为他人的需求着想。" +
            "<br><br>" +
            "(A) '粗心' 意味着没有给予足够的注意或思考以避免伤害或错误。" +
            "<br><br>" +
            "(C) '鲁莽' 意味着不考虑行动的后果。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 7,
        question: "Despite the glowing reviews, she remained __________ about the new product, wanting to see proof of its effectiveness before buying it.",
        chinese_question: "尽管有好评如潮，她仍对新产品持 __________ 态度，希望看到其有效性的证据才购买。",
        answers: [
            { option: "A", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "B", answer: "convinced", chinese_answer: "信服的", chinese_romanization: "xìnfú de" },
            { option: "C", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "D", answer: "trusting", chinese_answer: "信任的", chinese_romanization: "xìnrèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'skeptical' means not easily convinced; having doubts or reservations." +
            "<br><br>" +
            "(B) 'convinced' means completely certain about something." +
            "<br><br>" +
            "(C) 'confident' means feeling or showing certainty about something." +
            "<br><br>" +
            "(D) 'trusting' means showing or tending to have a belief in a person's honesty or sincerity; not suspicious.",
        chinese_explanation: "(A) '怀疑的' 意味着不容易被说服；有怀疑或保留态度的。" +
            "<br><br>" +
            "(B) '信服的' 意味着对某事完全确定的。" +
            "<br><br>" +
            "(C) '自信的' 意味着对某事感到或表现出确定性的。" +
            "<br><br>" +
            "(D) '信任的' 意味着表现出或倾向于相信一个人的诚实或真诚；不怀疑的。"
    },
    {
        id: 8,
    question: "His frustration was __________ when he started pacing back and forth in the room.",
    chinese_question: "当他开始在房间里来回踱步时，他的挫败感是 __________ 的。",
    answers: [
        { option: "A", answer: "apparent", chinese_answer: "显然的", chinese_romanization: "xiǎnrán de" },
        { option: "B", answer: "concealed", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
        { option: "C", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" },
        { option: "D", answer: "unnoticed", chinese_answer: "未被注意到的", chinese_romanization: "wèi bèi zhùyì dào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'apparent' means clearly visible or understood; obvious." +
        "<br><br>" +
        "(B) 'concealed' means kept secret; hidden." +
        "<br><br>" +
        "(C) 'insignificant' means too small or unimportant to be worth consideration." +
        "<br><br>" +
        "(D) 'unnoticed' means not seen or noticed.",
    chinese_explanation: "(A) “显然的” 意味着清晰可见或理解的；明显的。" +
        "<br><br>" +
        "(B) '隐藏的' 意味着保密的；隐藏的。" +
        "<br><br>" +
        "(C) '无关紧要的' 意味着太小或不重要而不值得考虑的。" +
        "<br><br>" +
        "(D) '未被注意到的' 意味着未被看到或注意到的。"
    },
    {
        id: 9,
    question: "After the long hike, they were __________ for a hot meal and a place to rest.",
    chinese_question: "长时间的徒步旅行后，他们 __________ 于热餐和休息的地方。",
    answers: [
        { option: "A", answer: "thriving", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "B", answer: "starved", chinese_answer: "挨饿", chinese_romanization: "ái'è" },
        { option: "C", answer: "flourishing", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" },
        { option: "D", answer: "nourished", chinese_answer: "营养充足", chinese_romanization: "yíngyǎng chōngzú" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'starved' means to suffer from a severe lack of something necessary." +
        "<br><br>" +
        "(A) 'thriving' means growing or developing well or vigorously." +
        "<br><br>" +
        "(C) 'flourishing' means developing rapidly and successfully; thriving." +
        "<br><br>" +
        "(D) 'nourished' means provided with the food or other substances necessary for growth, health, and good condition.",
    chinese_explanation: "(B) “挨饿” 意味着严重缺乏某些必要的东西。" +
        "<br><br>" +
        "(A) '繁荣' 意味着良好或旺盛地生长或发展。" +
        "<br><br>" +
        "(C) '兴旺' 意味着快速发展并取得成功；繁荣的。" +
        "<br><br>" +
        "(D) '营养充足' 意味着提供生长、健康和良好状况所需的食物或其他物质。"
    },
    {
        id: 10,
        question: "The pain he felt after the injury was very __________, not just imagined or exaggerated.",
        chinese_question: "他在受伤后的疼痛是非常 __________ 的，而不是想象的或夸大的。",
        answers: [
            { option: "A", answer: "real", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "B", answer: "fake", chinese_answer: "假的", chinese_romanization: "jiǎ de" },
            { option: "C", answer: "illusory", chinese_answer: "幻觉的", chinese_romanization: "huànjué de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'real' means actually existing as a thing or occurring in fact; not imagined or supposed." +
            "<br><br>" +
            "(B) 'fake' means not genuine; counterfeit." +
            "<br><br>" +
            "(C) 'illusory' means based on illusion; not real." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(A) '真实的' 意味着实际存在的或实际上发生的；不是想象的或假设的。" +
            "<br><br>" +
            "(B) '假的' 意味着不真实的；伪造的。" +
            "<br><br>" +
            "(C) '幻觉的' 意味着基于幻觉的；不真实的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面的。"
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
