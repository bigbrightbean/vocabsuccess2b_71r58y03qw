// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's __________ of products ensured that there was something for every type of customer.",
        chinese_question: "这家公司 __________ 的产品确保了每种顾客都能找到适合的东西。",
        answers: [
            { option: "A", answer: "couple", chinese_answer: "一对", chinese_romanization: "yīduì" },
            { option: "B", answer: "handful", chinese_answer: "少数", chinese_romanization: "shǎoshù" },
            { option: "C", answer: "single", chinese_answer: "单个", chinese_romanization: "dāngè" },
            { option: "D", answer: "legion", chinese_answer: "大量", chinese_romanization: "dàliàng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'legion' means a vast multitude or a large number." +
            "<br><br>" +
            "(A) 'couple' means two individuals of the same sort considered together." +
            "<br><br>" +
            "(B) 'handful' means a small number or amount." +
            "<br><br>" +
            "(C) 'single' means only one.",
        chinese_explanation: "(D) '大量'一词意味着数量庞大或众多。" +
            "<br><br>" +
            "(A) '一对' 意味着两个同类的个体一起考虑。" +
            "<br><br>" +
            "(B) '少数' 意味着数量少。" +
            "<br><br>" +
            "(C) '单个' 意味着只有一个。"
    },
    {
        id: 2,
    question: "The __________ laughter from the audience made the performer feel humiliated.",
    chinese_question: "观众的 __________ 笑声让表演者感到羞辱。",
    answers: [
        { option: "A", answer: "mocking", chinese_answer: "嘲讽", chinese_romanization: "cháofèng" },
        { option: "B", answer: "genuine", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
        { option: "C", answer: "appreciative", chinese_answer: "感激", chinese_romanization: "gǎnjī" },
        { option: "D", answer: "joyous", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'mocking' means making fun of someone or something in a cruel way." +
        "<br><br>" +
        "(B) 'genuine' means truly what something is said to be; authentic." +
        "<br><br>" +
        "(C) 'appreciative' means feeling or showing gratitude or pleasure." +
        "<br><br>" +
        "(D) 'joyous' means full of happiness and joy.",
    chinese_explanation: "(A) '嘲讽' 意味着以残酷的方式取笑某人或某事。" +
        "<br><br>" +
        "(B) '真诚' 意味着某物确实如所说的那样；真实的。" +
        "<br><br>" +
        "(C) '感激' 意味着感到或表现出感激或愉悦。" +
        "<br><br>" +
        "(D) '快乐' 意味着充满幸福和快乐。"
    },
    {
        id: 3,
    question: "The doctor's __________ efforts saved countless lives during the epidemic.",
    chinese_question: "在疫情期间，医生的 __________ 努力挽救了无数生命。",
    answers: [
        { option: "A", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
        { option: "B", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
        { option: "C", answer: "heroic", chinese_answer: "英勇的", chinese_romanization: "yīngyǒng de" },
        { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'heroic' means showing great bravery." +
        "<br><br>" +
        "(A) 'minimal' means of a minimum amount, quantity, or degree; negligible." +
        "<br><br>" +
        "(B) 'selfish' means lacking consideration for others." +
        "<br><br>" +
        "(D) 'ordinary' means with no special or distinctive features; normal.",
    chinese_explanation: "(C) “英勇的” 意味着表现出极大的勇敢。" +
        "<br><br>" +
        "(A) '最小的' 意味着最少量、数量或程度；可以忽略不计。" +
        "<br><br>" +
        "(B) '自私的' 意味着缺乏对他人的考虑。" +
        "<br><br>" +
        "(D) '普通的' 意味着没有特殊或独特的特征；正常的。"
    },
    {
        id: 4,
    question: "She was __________ about the upcoming vacation, planning every detail with excitement.",
    chinese_question: "她对即将到来的假期非常 __________ ，兴奋地计划每一个细节。",
    answers: [
        { option: "A", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
        { option: "B", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
        { option: "C", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" },
        { option: "D", answer: "disinterested", chinese_answer: "无兴趣", chinese_romanization: "wú xìngqù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
        "<br><br>" +
        "(B) 'indifferent' means having no particular interest or sympathy." +
        "<br><br>" +
        "(C) 'passive' means accepting or allowing what happens without active response." +
        "<br><br>" +
        "(D) 'disinterested' means not influenced by considerations of personal advantage.",
    chinese_explanation: "(A) '热情' 意味着表现出强烈和热切的享受、兴趣或认可。" +
        "<br><br>" +
        "(B) '漠不关心' 意味着没有特别的兴趣或同情。" +
        "<br><br>" +
        "(C) '被动' 意味着接受或允许发生的事情而没有积极的反应。" +
        "<br><br>" +
        "(D) '无兴趣' 意味着不受个人利益考虑的影响。"
    },
    {
        id: 5,
    question: "He felt __________ after receiving the award, his hard work finally recognized.",
    chinese_question: "他在领奖后感到__________，他的辛勤工作终于得到了认可。",
    answers: [
        { option: "A", answer: "disappointed", chinese_answer: "失望的", chinese_romanization: "shīwàng de" },
        { option: "B", answer: "elated", chinese_answer: "兴高采烈的", chinese_romanization: "xìnggāo cǎiliè de" },
        { option: "C", answer: "sorrowful", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" },
        { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'elated' means ecstatically happy." +
        "<br><br>" +
        "(A) 'disappointed' means sad or displeased because someone or something has failed to fulfill one's hopes or expectations." +
        "<br><br>" +
        "(C) 'sorrowful' means feeling or showing grief." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(B) '兴高采烈的'一词意味着欣喜若狂。" +
        "<br><br>" +
        "(A) '失望的' 意味着因为某人或某事未能实现自己的希望或期望而感到悲伤或不悦的。" +
        "<br><br>" +
        "(C) '悲伤的' 意味着感到或表现出悲伤。" +
        "<br><br>" +
        "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 6,
    question: "His __________ plans for the company's expansion seemed unrealistic and overly ambitious to the board members.",
    chinese_question: "他对公司扩张的 __________ 计划在董事会成员看来是不切实际且过于雄心勃勃的。",
    answers: [
        { option: "A", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
        { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
        { option: "C", answer: "grandiose", chinese_answer: "宏伟的", chinese_romanization: "hóngwěi de" },
        { option: "D", answer: "practical", chinese_answer: "实际的", chinese_romanization: "shíjì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'grandiose' means impressive or magnificent in appearance or style, especially pretentiously so." +
        "<br><br>" +
        "(A) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
        "<br><br>" +
        "(B) 'modest' means unassuming in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(D) 'practical' means of or concerned with the actual doing or use of something rather than with theory and ideas.",
    chinese_explanation: "(C) '宏伟的' 意味着外观或风格上令人印象深刻或壮丽，特别是自命不凡的。" +
        "<br><br>" +
        "(A) '现实的' 意味着对可以实现或预期的事情有合理和实际的想法。" +
        "<br><br>" +
        "(B) '谦虚的' 意味着对自己能力或成就的估计不过高的。" +
        "<br><br>" +
        "(D) '实际的' 意味着关心实际操作或使用的，而不是理论和想法的。"
    },
    {
        id: 7,
    question: "With a __________ twist of his lips, he acknowledged the compliment, knowing it was meant sarcastically.",
    chinese_question: "他嘴角带着 __________ 的扭曲，接受了那句恭维，知道那是讽刺的。",
    answers: [
        { option: "A", answer: "earnest", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" },
        { option: "B", answer: "wry", chinese_answer: "挖苦的", chinese_romanization: "wākǔ de" },
        { option: "C", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
        { option: "D", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'wry' means using or expressing dry, especially mocking, humor." +
        "<br><br>" +
        "(A) 'earnest' means resulting from or showing sincere and intense conviction." +
        "<br><br>" +
        "(C) 'genuine' means truly what something is said to be; authentic." +
        "<br><br>" +
        "(D) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval.",
    chinese_explanation: "(B) '挖苦的' 意味着使用或表达干涩的，尤其是嘲弄的幽默。" +
        "<br><br>" +
        "(A) '认真的' 意味着由或显示出真诚和强烈的信念。" +
        "<br><br>" +
        "(C) '真诚的' 意味着真实的，真正的。" +
        "<br><br>" +
        "(D) '热情的' 意味着有或表现出强烈和热切的享受、兴趣或赞同。"
    },
    {
        id: 8,
        question: "The market showed __________ movement, with prices fluctuating unpredictably throughout the day.",
        chinese_question: "市场表现出 __________ 的波动，价格在一天内无法预测地波动。",
        answers: [
            { option: "A", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "steady", chinese_answer: "稳固的", chinese_romanization: "wěngù de" },
            { option: "C", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "D", answer: "restless", chinese_answer: "焦躁的", chinese_romanization: "jiāozào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'restless' means unable to rest or relax as a result of anxiety or boredom, often used figuratively to describe unpredictable and constant movement or change." +
            "<br><br>" +
            "(A) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(B) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(D) '焦躁的' 意味着由于焦虑或无聊而无法休息或放松的，通常用作比喻来形容不可预测和持续不断的运动或变化。" +
            "<br><br>" +
            "(A) '稳定的' 意味着不太可能改变或失败；牢固建立的。" +
            "<br><br>" +
            "(B) '稳固的' 意味着牢固固定、支撑或平衡的；不摇晃或移动的。" +
            "<br><br>" +
            "(C) '平静的' 意味着不显示或感到紧张、愤怒或其他强烈情绪的。"
    },
    {
        id: 9,
        question: "The politician proposed a __________ change to the healthcare system, aiming to overhaul it entirely rather than making incremental adjustments.",
        chinese_question: "这位政治家提出了对医疗系统进行 __________ 变革的建议，旨在彻底改革它，而不是进行渐进调整。",
        answers: [
            { option: "A", answer: "radical", chinese_answer: "激进的", chinese_romanization: "jījìn de" },
            { option: "B", answer: "moderate", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "conservative", chinese_answer: "保守的", chinese_romanization: "bǎoshǒu de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'radical' means relating to or affecting the fundamental nature of something; far-reaching or thorough." +
            "<br><br>" +
            "(B) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(C) 'conservative' means holding to traditional attitudes and values and cautious about change or innovation." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(A) '激进的' 意味着关系到或影响某事物的根本性质的；深远或彻底的。" +
            "<br><br>" +
            "(B) '温和的' 意味着数量、强度、质量或程度上的平均。" +
            "<br><br>" +
            "(C) '保守的' 意味着持有传统态度和价值观，并对变化或创新保持谨慎的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面的。"
    },
    {
        id: 10,
        question: "The __________ nature of the software resulted in frequent crashes and user frustration.",
        chinese_question: "软件的 __________ 性质导致频繁崩溃和用户挫败感。",
        answers: [
            { option: "A", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "B", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
            { option: "C", answer: "efficient", chinese_answer: "高效的", chinese_romanization: "gāoxiào de" },
            { option: "D", answer: "robust", chinese_answer: "强健的", chinese_romanization: "qiángjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'problematic' means constituting or presenting a problem or difficulty." +
            "<br><br>" +
            "(A) 'reliable' means consistently good in quality or performance; able to be trusted." +
            "<br><br>" +
            "(C) 'efficient' means achieving maximum productivity with minimum wasted effort or expense." +
            "<br><br>" +
            "(D) 'robust' means strong and healthy; vigorous.",
        chinese_explanation: "(B) '有问题的' 意味着构成或呈现问题或困难的。" +
            "<br><br>" +
            "(A) '可靠的' 意味着质量或性能始终如一的；值得信赖的。" +
            "<br><br>" +
            "(C) '高效的' 意味着以最少的浪费努力或费用实现最大生产力的。" +
            "<br><br>" +
            "(D) '强健的' 意味着强壮和健康的；精力充沛的。"
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
