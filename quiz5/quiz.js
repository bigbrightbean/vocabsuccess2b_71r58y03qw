// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Unlike others who were overly gentle, the __________ honesty of his feedback helped her improve her work significantly.",
        chinese_question: "不像其他人那样过于温和，他__________的诚实反馈帮助她显著地改进了她的工作。",
        answers: [
            { option: "A", answer: "discouraging", chinese_answer: "令人沮丧的", chinese_romanization: "lìng rén jǔsàng de" },
            { option: "B", answer: "refreshing", chinese_answer: "清新的", chinese_romanization: "qīng xīn de" },
            { option: "C", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "D", answer: "critical", chinese_answer: "批评的", chinese_romanization: "pīpíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'refreshing' means welcome or invigorating through newness or novelty." +
            "<br><br>" +
            "(A) 'discouraging' means causing someone to lose confidence or enthusiasm; depressing." +
            "<br><br>" +
            "(C) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'critical' means expressing adverse or disapproving comments or judgments.",
        chinese_explanation: "(B) '清新的' 意味着通过新颖或新奇带来欢迎或振奋的。" +
            "<br><br>" +
            "(A) '令人沮丧的' 意味着让人失去信心或热情的；令人沮丧的。" +
            "<br><br>" +
            "(C) '严厉的' 意味着对感官不愉快地粗糙或刺耳的。" +
            "<br><br>" +
            "(D) '批评的' 意味着表达不利或不赞成的评论或判断的。"
    },
    {
        id: 2,
    question: "The author's __________ narrative style captivated readers, drawing them into the story's rich and vivid world.",
    chinese_question: "作者 __________ 的叙事风格吸引了读者，将他们带入丰富而生动的世界。",
    answers: [
        { option: "A", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
        { option: "B", answer: "vibrant", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
        { option: "C", answer: "dry", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
        { option: "D", answer: "convoluted", chinese_answer: "复杂的", chinese_romanization: "fùzá de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'vibrant' means full of energy and enthusiasm." +
        "<br><br>" +
        "(A) 'monotonous' means dull, tedious, and repetitious." +
        "<br><br>" +
        "(C) 'dry' means lacking interest or excitement." +
        "<br><br>" +
        "(D) 'convoluted' means extremely complex and difficult to follow.",
    chinese_explanation: "(B) '充满活力的' 意味着充满能量和热情的。" +
        "<br><br>" +
        "(A) '单调的' 意味着沉闷、乏味和重复的。" +
        "<br><br>" +
        "(C) '枯燥的' 意味着缺乏兴趣或激动的。" +
        "<br><br>" +
        "(D) '复杂的' 意味着极其复杂且难以理解的。"
    },
    {
        id: 3,
    question: "The customer became increasingly __________, complaining about every small inconvenience and demanding immediate attention.",
    chinese_question: "这位顾客变得越来越 __________，抱怨每一个小不便，并要求立即得到关注。",
    answers: [
        { option: "A", answer: "querulous", chinese_answer: "爱发牢骚的", chinese_romanization: "ài fā láosāo de" },
        { option: "B", answer: "satisfied", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" },
        { option: "C", answer: "cheerful", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
        { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'querulous' means complaining in a petulant or whining manner." +
        "<br><br>" +
        "(B) 'satisfied' means contented; pleased." +
        "<br><br>" +
        "(C) 'cheerful' means noticeably happy and optimistic." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(A) '爱发牢骚的' 意味着以任性或抱怨的方式抱怨的。" +
        "<br><br>" +
        "(B) '满意的' 意味着满足的；高兴的。" +
        "<br><br>" +
        "(C) '高兴的' 意味着明显的快乐和乐观的。" +
        "<br><br>" +
        "(D) '冷漠的' 意味着没有特别的兴趣或同情的；冷漠的。"
    },
    {
        id: 4,
    question: "In many cultures, the color white is __________ with purity and innocence.",
    chinese_question: "在许多文化中，白色是 __________ 纯洁和天真的象征。",
    answers: [
        { option: "A", answer: "opposite", chinese_answer: "相反的", chinese_romanization: "xiāngfǎn de" },
        { option: "B", answer: "synonymous", chinese_answer: "同义的", chinese_romanization: "tóngyì de" },
        { option: "C", answer: "unrelated", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
        { option: "D", answer: "conflicting", chinese_answer: "矛盾的", chinese_romanization: "máodùn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'synonymous' means having the same or nearly the same meaning as another word or phrase." +
        "<br><br>" +
        "(A) 'opposite' means completely different; contrary." +
        "<br><br>" +
        "(C) 'unrelated' means not related or connected." +
        "<br><br>" +
        "(D) 'conflicting' means incompatible or at variance; contradictory.",
    chinese_explanation: "(B) '同义的' 意味着与另一个词或短语具有相同或几乎相同的意思。" +
        "<br><br>" +
        "(A) '相反的' 意味着完全不同的；相反的。" +
        "<br><br>" +
        "(C) '无关的' 意味着不相关的或不连接的。" +
        "<br><br>" +
        "(D) '矛盾的' 意味着不兼容或有差异的；矛盾的。"
    },
    {
        id: 5,
        question: "His __________ commitment to the cause inspired many others to join the movement.",
        chinese_question: "他对事业的__________承诺激励了许多人加入运动。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "B", answer: "dispassionate", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
            { option: "C", answer: "passionate", chinese_answer: "充满激情的", chinese_romanization: "chōngmǎn jīqíng de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'passionate' means showing or caused by strong feelings or a strong belief. Figuratively, it can mean being very dedicated and enthusiastic." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'dispassionate' means not influenced by strong emotion, and so able to be rational and impartial." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(C) '充满激情的'一词意味着表现出或由强烈的感情或信念引起的。比喻地，它可以表示非常投入和热情的。" +
            "<br><br>" +
            "(A) '无动于衷的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '冷静的' 意味着不受强烈情感影响的，因此能够理性和公正的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着表现出或感受不到兴趣、热情或关心的。"
    },
    {
        id: 6,
        question: "The __________ investor carefully analyzed the market trends before making any decisions.",
        chinese_question: "那位 __________ 的投资者在做出任何决定之前仔细分析了市场趋势。",
        answers: [
            { option: "A", answer: "rash", chinese_answer: "轻率的", chinese_romanization: "qīngshuài de" },
            { option: "B", answer: "thoughtless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "sagacious", chinese_answer: "睿智的", chinese_romanization: "ruìzhì de" },
            { option: "D", answer: "imprudent", chinese_answer: "不谨慎的", chinese_romanization: "bù jǐnshèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sagacious' means having or showing keen mental discernment and good judgment; wise or shrewd." +
            "<br><br>" +
            "(A) 'rash' means displaying or proceeding from a lack of careful consideration of the possible consequences of an action." +
            "<br><br>" +
            "(B) 'thoughtless' means without consideration of the possible consequences." +
            "<br><br>" +
            "(D) 'imprudent' means not showing care for the consequences of an action; rash.",
        chinese_explanation: "(C) '睿智的' 意味着具有或表现出敏锐的心理辨别力和良好的判断力；聪明的或精明的。" +
            "<br><br>" +
            "(A) '轻率的' 意味着缺乏对可能后果的仔细考虑的。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有考虑到可能的后果。" +
            "<br><br>" +
            "(D) '不谨慎的' 意味着没有关心行动的后果；轻率的。"
    },
    {
        id: 7,
    question: "The old, __________ machinery in the factory was large and heavy, and made production slow and inefficient.",
    chinese_question: "工厂里老旧的__________机器又大又重，使得生产缓慢且效率低下。",
    answers: [
        { option: "A", answer: "sleek", chinese_answer: "光滑的", chinese_romanization: "guānghuá de" },
        { option: "B", answer: "efficient", chinese_answer: "高效的", chinese_romanization: "gāoxiào de" },
        { option: "C", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
        { option: "D", answer: "cumbrous", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'cumbrous' means large or heavy and therefore difficult to carry or use; unwieldy." +
        "<br><br>" +
        "(A) 'sleek' means smooth and glossy." +
        "<br><br>" +
        "(B) 'efficient' means achieving maximum productivity with minimum wasted effort or expense." +
        "<br><br>" +
        "(C) 'modern' means relating to the present or recent times as opposed to the remote past.",
    chinese_explanation: "(D) '笨重的' 意味着大而重，因此难以携带或使用；笨拙。" +
        "<br><br>" +
        "(A) '光滑的' 意味着光滑有光泽。" +
        "<br><br>" +
        "(B) '高效的' 意味着以最小的浪费努力或费用实现最大的生产力。" +
        "<br><br>" +
        "(C) '现代的' 意味着与现在或最近的时间有关，而不是遥远的过去。"
    },
    {
        id: 8,
        question: "His __________ behaviour led his friends to wonder what he was hiding.",
        chinese_question: "他的 __________ 行为让朋友们想知道他在隐藏什么。",
        answers: [
            { option: "A", answer: "candid", chinese_answer: "坦率的", chinese_romanization: "tǎnshuài de" },
            { option: "B", answer: "secretive", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "C", answer: "frank", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "D", answer: "forthright", chinese_answer: "坦白的", chinese_romanization: "tǎnbái de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'secretive' means inclined to conceal feelings and intentions or not to disclose information." +
            "<br><br>" +
            "(A) 'candid' means truthful and straightforward; frank." +
            "<br><br>" +
            "(C) 'frank' means open, honest, and direct in speech or writing, especially when dealing with unpalatable matters." +
            "<br><br>" +
            "(D) 'forthright' means (of a person or their manner or speech) direct and outspoken; straightforward and honest.",
        chinese_explanation: "(B) '秘密的' 意味着倾向于隐瞒感情和意图或不披露信息的。" +
            "<br><br>" +
            "(A) '坦率的' 意味着真实和直率的；坦率的。" +
            "<br><br>" +
            "(C) '直率的' 意味着在言语或写作中开诚布公和直接的，尤其是在处理令人不快的事情时。" +
            "<br><br>" +
            "(D) '坦白的' 意味着（指人或他们的态度或言语）直接和坦率的；坦诚的。"
    },
    {
        id: 9,
        question: "The files on his desk were arranged in a __________ manner, with papers and documents scattered randomly and without any order.",
        chinese_question: "他桌上的文件排列 __________，纸张和文件随机散乱，没有任何顺序。",
        answers: [
            { option: "A", answer: "haphazard", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "systematic", chinese_answer: "系统的", chinese_romanization: "xìtǒng de" },
            { option: "C", answer: "organized", chinese_answer: "有组织的", chinese_romanization: "yǒu zǔzhī de" },
            { option: "D", answer: "methodical", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(B) 'systematic' means done or acting according to a fixed plan or system." +
            "<br><br>" +
            "(C) 'organized' means arranged in a systematic way." +
            "<br><br>" +
            "(D) 'methodical' means done according to a systematic or established form of procedure.",
        chinese_explanation: "(A) '随意的' 意味着缺乏任何明显的组织原则。" +
            "<br><br>" +
            "(B) '系统的' 意味着根据固定的计划或系统进行的。" +
            "<br><br>" +
            "(C) '有组织的' 意味着以系统的方式安排的。" +
            "<br><br>" +
            "(D) '有条理的' 意味着根据系统或既定程序进行的。"
    },
    {
        id: 10,
    question: "His __________ habits allowed him to save enough money to buy his first home.",
    chinese_question: "他的 __________ 习惯使他能够存足够的钱买第一套房子。",
    answers: [
        { option: "A", answer: "prodigal", chinese_answer: "挥霍的", chinese_romanization: "huīhuò de" },
        { option: "B", answer: "frivolous", chinese_answer: "轻浮的", chinese_romanization: "qīngfú de" },
        { option: "C", answer: "thrifty", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
        { option: "D", answer: "spendthrift", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'thrifty' means using money and other resources carefully and not wastefully." +
        "<br><br>" +
        "(A) 'prodigal' means spending money or resources freely and recklessly." +
        "<br><br>" +
        "(B) 'frivolous' means not having any serious purpose or value." +
        "<br><br>" +
        "(D) 'spendthrift' means a person who spends money in an extravagant, irresponsible way.",
    chinese_explanation: "(C) '节俭的' 意味着谨慎使用金钱和其他资源，不浪费的。" +
        "<br><br>" +
        "(A) '挥霍的' 意味着自由和不计后果地花钱或资源的。" +
        "<br><br>" +
        "(B) '轻浮的' 意味着没有任何严肃目的或价值的。" +
        "<br><br>" +
        "(D) '浪费的' 意味着以奢侈、不负责任的方式花钱的人。"
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
