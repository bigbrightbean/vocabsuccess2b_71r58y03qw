// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The __________ of their proposal made it difficult for others to take them seriously.",
    chinese_question: "他们提议的 __________ 让其他人很难认真对待他们。",
    answers: [
        { option: "A", answer: "silliness", chinese_answer: "愚蠢", chinese_romanization: "yúchǔn" },
        { option: "B", answer: "thoroughness", chinese_answer: "彻底", chinese_romanization: "chèdǐ" },
        { option: "C", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
        { option: "D", answer: "significance", chinese_answer: "重要性", chinese_romanization: "zhòngyào xìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'silliness' means the quality of being silly or foolish." +
        "<br><br>" +
        "(B) 'thoroughness' means the quality of being thorough and complete." +
        "<br><br>" +
        "(C) 'clarity' means the quality of being clear and easy to understand." +
        "<br><br>" +
        "(D) 'significance' means the quality of being worthy of attention; importance.",
    chinese_explanation: "(A) '愚蠢' 意味着愚蠢或愚蠢的品质。" +
        "<br><br>" +
        "(B) '彻底' 意味着彻底和完整的品质。" +
        "<br><br>" +
        "(C) '清晰' 意味着清晰易懂的品质。" +
        "<br><br>" +
        "(D) '重要性' 意味着值得注意的重要性。"
    },
    {
        id: 2,
    question: "Despite her friendly __________, she was quite reserved and introverted.",
    chinese_question: "尽管她外表 __________，但她实际上很矜持和内向。",
    answers: [
        { option: "A", answer: "demeanor", chinese_answer: "举止", chinese_romanization: "jǔzhǐ" },
        { option: "B", answer: "veneer", chinese_answer: "外表", chinese_romanization: "wàibiǎo" },
        { option: "C", answer: "attitude", chinese_answer: "态度", chinese_romanization: "tàidù" },
        { option: "D", answer: "behavior", chinese_answer: "行为", chinese_romanization: "xíngwéi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'veneer' means an outward appearance that hides the true nature of something." +
        "<br><br>" +
        "(A) 'demeanor' means outward behavior or bearing." +
        "<br><br>" +
        "(C) 'attitude' means a settled way of thinking or feeling about something." +
        "<br><br>" +
        "(D) 'behavior' means the way in which one acts or conducts oneself, especially towards others.",
    chinese_explanation: "(B) '外表' 一词意味着隐藏某物真面目的外表。" +
        "<br><br>" +
        "(A) '举止' 意味着外在行为或举止。" +
        "<br><br>" +
        "(C) '态度' 意味着对某事的一种固定思维或感觉方式。" +
        "<br><br>" +
        "(D) '行为' 意味着一个人行为或举止的方式，尤其是对他人的方式。"
    },
    {
        id: 3,
        question: "The __________ of the slums was shocking, with open sewers and dilapidated buildings everywhere.",
        chinese_question: "贫民窟的 __________ 令人震惊，到处都是露天下水道和破旧的建筑。",
        answers: [
                { option: "A", answer: "wealth", chinese_answer: "财富", chinese_romanization: "cáifù" },
                { option: "B", answer: "squalour", chinese_answer: "肮脏", chinese_romanization: "āngzāng" },
                { option: "C", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
                { option: "D", answer: "cleanliness", chinese_answer: "清洁", chinese_romanization: "qīngjié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'squalor' means a state of being extremely dirty and unpleasant, especially as a result of poverty or neglect." +
                "<br><br>" +
                "(A) 'wealth' means an abundance of valuable possessions or money." +
                "<br><br>" +
                "(C) 'prosperity' means the state of being prosperous." +
                "<br><br>" +
                "(D) 'cleanliness' means the state of being clean.",
        chinese_explanation: "(B) '肮脏'一词意味着极度肮脏和不愉快的状态，尤其是由于贫穷或忽视所致。" +
                "<br><br>" +
                "(A) '财富' 意味着拥有大量有价值的财产或金钱。" +
                "<br><br>" +
                "(C) '繁荣' 意味着繁荣的状态。" +
                "<br><br>" +
                "(D) '清洁' 意味着干净的状态。"
    },
    {
        id: 4,
        question: "To his __________, he found out that his proposal had been rejected without even being considered.",
        chinese_question: "令他非常 __________ 的是，他发现自己的提议甚至没有被考虑就被拒绝了。",
        answers: [
                { option: "A", answer: "surprise", chinese_answer: "惊讶", chinese_romanization: "jīngyà" },
                { option: "B", answer: "chagrin", chinese_answer: "懊恼", chinese_romanization: "àonǎo" },
                { option: "C", answer: "joy", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
                { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chagrin' figuratively means feeling distressed or humiliated because of a disappointment or setback." +
                "<br><br>" +
                "(A) 'surprise' means a feeling of mild astonishment or shock caused by something unexpected." +
                "<br><br>" +
                "(C) 'joy' means a feeling of great pleasure and happiness." +
                "<br><br>" +
                "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '懊恼' 在此语境下意指因为失望或挫折而感到苦恼或羞辱。" +
                "<br><br>" +
                "(A) '惊讶' 意味着因意外事件引起的轻微惊奇或震惊。" +
                "<br><br>" +
                "(C) '高兴' 意味着极大的愉悦和幸福感。" +
                "<br><br>" +
                "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 5,
        question: "His reputation as a financial __________ grew after his accurate predictions during the economic crisis.",
        chinese_question: "在经济危机期间，他的准确预测使他作为金融 __________ 的声誉大增。",
        answers: [
                { option: "A", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
                { option: "B", answer: "pundit", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
                { option: "C", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
                { option: "D", answer: "learner", chinese_answer: "学习者", chinese_romanization: "xuéxí zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pundit' means an expert in a particular subject or field who is frequently called upon to give opinions about it to the public." +
                "<br><br>" +
                "(A) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
                "<br><br>" +
                "(C) 'novice' means a person new to or inexperienced in a field or situation." +
                "<br><br>" +
                "(D) 'learner' means a person who is learning a subject or skill.",
        chinese_explanation: "(B) '专家'一词意味着在特定学科或领域的专家，经常被要求向公众提供意见。" +
                "<br><br>" +
                "(A) '业余爱好者' 意味着从事追求，特别是体育活动，而没有报酬的人。" +
                "<br><br>" +
                "(C) '新手' 意味着在某个领域或情况下的新手或缺乏经验的人。" +
                "<br><br>" +
                "(D) '学习者' 意味着正在学习某个学科或技能的人。"
    },
    {
        id: 6,
    question: "The entrepreneur's __________ of her business into technology, healthcare, and retail sectors allowed her to tap into previously unexplored markets.",
    chinese_question: "企业家将她的业务 __________ 到技术、医疗和零售行业，使她能够进入以前未开发的市场。",
    answers: [
        { option: "A", answer: "diversification", chinese_answer: "多元化", chinese_romanization: "duōyuán huà" },
        { option: "B", answer: "reduction", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "C", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
        { option: "D", answer: "repetition", chinese_answer: "重复", chinese_romanization: "chóngfù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'diversification' figuratively means expanding into new industries to access new markets." +
        "<br><br>" +
        "(B) 'reduction' means the action or fact of making something smaller or less in amount, degree, or size." +
        "<br><br>" +
        "(C) 'isolation' means the process or fact of isolating or being isolated." +
        "<br><br>" +
        "(D) 'repetition' means the action of repeating something that has already been said or written.",
    chinese_explanation: "(A) '多元化' 在此语境下意指扩展到新行业以进入新市场。" +
        "<br><br>" +
        "(B) '减少' 意味着减少数量、程度或大小的行为或事实。" +
        "<br><br>" +
        "(C) '隔离' 意味着隔离或被隔离的过程或事实。" +
        "<br><br>" +
        "(D) '重复' 意味着重复已经说过或写过的内容的行为。"
    },
    {
        id: 7,
    question: "Healing from a loss is a long __________ that takes time and support.",
    chinese_question: "从失去中恢复是一个漫长的 __________，需要时间和支持。",
    answers: [
        { option: "A", answer: "incident", chinese_answer: "事件", chinese_romanization: "shìjiàn" },
        { option: "B", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "C", answer: "process", chinese_answer: "过程", chinese_romanization: "guòchéng" },
        { option: "D", answer: "disaster", chinese_answer: "灾难", chinese_romanization: "zāinàn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'process' means a series of actions or steps taken in order to achieve a particular end." +
        "<br><br>" +
        "(A) 'incident' means an event or occurrence." +
        "<br><br>" +
        "(B) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
        "<br><br>" +
        "(D) 'disaster' means a sudden event, such as an accident or a natural catastrophe, that causes great damage or loss of life.",
    chinese_explanation: "(C) '过程' 意味着为了实现特定目标而采取的一系列行动或步骤。" +
        "<br><br>" +
        "(A) '事件' 意味着一个事件或事件。" +
        "<br><br>" +
        "(B) '庆祝' 意味着通过参与愉快的、通常是社交活动来标记对重要事件或场合的喜悦。" +
        "<br><br>" +
        "(D) '灾难' 意味着突然的事件，如事故或自然灾害，造成巨大损失或人员伤亡。"
    },
    {
        id: 8,
    question: "The lion is a well-known __________ in the animal kingdom, hunting and killing other animals for food.",
    chinese_question: "狮子是动物王国中著名的 __________ ，捕猎和杀死其他动物获取食物。",
    answers: [
        { option: "A", answer: "predator", chinese_answer: "捕食者", chinese_romanization: "bǔshí zhě" },
        { option: "B", answer: "herbivore", chinese_answer: "食草动物", chinese_romanization: "shícǎo dòngwù" },
        { option: "C", answer: "prey", chinese_answer: "猎物", chinese_romanization: "lièwù" },
        { option: "D", answer: "scavenger", chinese_answer: "食腐动物", chinese_romanization: "shífǔ dòngwù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'predator' means an animal that naturally preys on others." +
        "<br><br>" +
        "(B) 'herbivore' means an animal that feeds on plants." +
        "<br><br>" +
        "(C) 'prey' means an animal that is hunted and killed by another for food." +
        "<br><br>" +
        "(D) 'scavenger' means an animal that feeds on carrion, dead plant material, or refuse.",
    chinese_explanation: "(A) '捕食者' 意味着自然捕食其他动物的动物。" +
        "<br><br>" +
        "(B) '食草动物' 意味着以植物为食的动物。" +
        "<br><br>" +
        "(C) '猎物' 意味着被另一动物捕猎和杀死的动物。" +
        "<br><br>" +
        "(D) '食腐动物' 意味着以腐肉、死植物材料或垃圾为食的动物。"
    },
    {
        id: 9,
    question: "She made a __________ about the beautiful weather, brightening everyone's mood.",
    chinese_question: "她对美丽的天气发表了一番 __________ ，使每个人的心情都明朗起来。",
    answers: [
        { option: "A", answer: "remark", chinese_answer: "言论", chinese_romanization: "yánlùn" },
        { option: "B", answer: "complaint", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
        { option: "C", answer: "command", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
        { option: "D", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dī yǔ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'remark' means a spoken statement or comment." +
        "<br><br>" +
        "(B) 'complaint' means a statement that something is unsatisfactory or unacceptable." +
        "<br><br>" +
        "(C) 'command' means an authoritative order." +
        "<br><br>" +
        "(D) 'whisper' means speaking very softly using one's breath without vocal cords.",
    chinese_explanation: "(A) '言论' 意味着口头的陈述或评论。" +
        "<br><br>" +
        "(B) '抱怨' 意味着对某事不满意或不可接受的陈述。" +
        "<br><br>" +
        "(C) '命令' 意味着权威的指令。" +
        "<br><br>" +
        "(D) '低语' 意味着用呼吸而不是声带非常轻声地说话。"
    },
    {
        id: 10,
    question: "His relaxed __________ during the interview helped to ease the tension in the room.",
    chinese_question: "他在面试时放松的 __________ 帮助缓解了房间里的紧张气氛。",
    answers: [
        { option: "A", answer: "anxiety", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
        { option: "B", answer: "anger", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
        { option: "C", answer: "countenance", chinese_answer: "面容", chinese_romanization: "miànróng" },
        { option: "D", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'countenance' means a person's face or facial expression." +
        "<br><br>" +
        "(A) 'anxiety' means a feeling of worry, nervousness, or unease." +
        "<br><br>" +
        "(B) 'anger' means a strong feeling of annoyance, displeasure, or hostility." +
        "<br><br>" +
        "(D) 'confusion' means lack of understanding; uncertainty.",
    chinese_explanation: "(C) '面容' 意味着一个人的脸或面部表情。" +
        "<br><br>" +
        "(A) '焦虑' 意味着一种担心、紧张或不安的感觉。" +
        "<br><br>" +
        "(B) '愤怒' 意味着一种强烈的恼怒、不满或敌意的感觉。" +
        "<br><br>" +
        "(D) '困惑' 意味着缺乏理解；不确定性。"
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
