// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The excessive paperwork was the __________ of the employees' productivity, causing delays and frustration in completing tasks.",
    chinese_question: "过多的文书工作是员工生产力的 __________，导致任务完成的延误和沮丧。",
    answers: [
        { option: "A", answer: "benefit", chinese_answer: "好处", chinese_romanization: "hǎochù" },
        { option: "B", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" },
        { option: "C", answer: "boon", chinese_answer: "福音", chinese_romanization: "fúyīn" },
        { option: "D", answer: "bane", chinese_answer: "祸根", chinese_romanization: "huògēn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'bane' means a cause of great distress or annoyance." +
        "<br><br>" +
        "(A) 'benefit' means an advantage or profit gained from something." +
        "<br><br>" +
        "(B) 'advantage' means a condition or circumstance that puts one in a favorable or superior position." +
        "<br><br>" +
        "(C) 'boon' means a thing that is helpful or beneficial.",
    chinese_explanation: "(D) '祸根' 意味着造成极大痛苦或烦恼的原因。" +
        "<br><br>" +
        "(A) '好处' 意味着从某事中获得的优势或利润。" +
        "<br><br>" +
        "(B) '优势' 意味着使某人处于有利或优越地位的条件或环境。" +
        "<br><br>" +
        "(C) '福音' 意味着有益或有帮助的事物。"
    },
    {
        id: 2,
        question: "The economic __________ offered his insights on the potential impacts of the new tax policy during the television interview.",
        chinese_question: "这位经济 __________ 在电视采访中提供了对新税收政策潜在影响的见解。",
        answers: [
                { option: "A", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
                { option: "B", answer: "pundit", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
                { option: "C", answer: "learner", chinese_answer: "学习者", chinese_romanization: "xuéxí zhě" },
                { option: "D", answer: "spectator", chinese_answer: "观众", chinese_romanization: "guānzhòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pundit' means an expert in a particular subject or field who is frequently called upon to give opinions about it to the public." +
                "<br><br>" +
                "(A) 'novice' means a person new to or inexperienced in a field or situation." +
                "<br><br>" +
                "(C) 'learner' means a person who is learning a subject or skill." +
                "<br><br>" +
                "(D) 'spectator' means a person who watches at a show, game, or other event.",
        chinese_explanation: "(B) '专家'一词意味着在特定学科或领域的专家，经常被要求向公众提供意见。" +
                "<br><br>" +
                "(A) '新手' 意味着在某个领域或情况下的新手或缺乏经验的人。" +
                "<br><br>" +
                "(C) '学习者' 意味着正在学习某个学科或技能的人。" +
                "<br><br>" +
                "(D) '观众' 意味着在演出、比赛或其他活动中观看的人。"
    },
    {
        id: 3,
    question: "The young athlete thrived under the __________ of his experienced coach.",
    chinese_question: "这位年轻的运动员在他经验丰富的教练的 __________ 下茁壮成长。",
    answers: [
        { option: "A", answer: "abandonment", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "tutelage", chinese_answer: "指导", chinese_romanization: "zhǐdǎo" },
        { option: "C", answer: "hostility", chinese_answer: "敌意", chinese_romanization: "díyì" },
        { option: "D", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'tutelage' means protection of or authority over someone; instruction or guidance." +
        "<br><br>" +
        "(A) 'abandonment' means the action or fact of abandoning or being abandoned." +
        "<br><br>" +
        "(C) 'hostility' means hostile behavior; unfriendliness or opposition." +
        "<br><br>" +
        "(D) 'disregard' means to pay no attention to; ignore.",
    chinese_explanation: "(B) '指导' 意味着对某人的保护或权威；指导或引导。" +
        "<br><br>" +
        "(A) '放弃' 意味着放弃或被放弃的行为或事实。" +
        "<br><br>" +
        "(C) '敌意' 意味着敌对行为；不友好或反对。" +
        "<br><br>" +
        "(D) '忽视' 意味着不注意；忽略。"
    },
    {
        id: 4,
        question: "Politicians often act with __________, believing their positions make them untouchable by the law.",
        chinese_question: "政客们往往肆无忌惮地行动，认为他们的地位使他们不受法律的制裁。",
        answers: [
                { option: "A", answer: "accountability", chinese_answer: "责任", chinese_romanization: "zérèn" },
                { option: "B", answer: "impunity", chinese_answer: "免罚", chinese_romanization: "miǎnfá" },
                { option: "C", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
                { option: "D", answer: "diligence", chinese_answer: "勤勉", chinese_romanization: "qínmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impunity' figuratively means being free from the negative consequences of actions, often due to one's status or influence." +
                "<br><br>" +
                "(A) 'accountability' means the fact or condition of being accountable; responsibility." +
                "<br><br>" +
                "(C) 'transparency' means the condition of being transparent." +
                "<br><br>" +
                "(D) 'diligence' means careful and persistent work or effort.",
        chinese_explanation: "(B) '免罚' 在此语境下意指由于某人的地位或影响而免于行为带来的负面后果。" +
                "<br><br>" +
                "(A) '责任' 意味着负责的事实或条件。" +
                "<br><br>" +
                "(C) '透明' 意味着透明的状态。" +
                "<br><br>" +
                "(D) '勤勉' 意味着仔细和坚持不懈的工作或努力。"
    },
    {
        id: 5,
        question: "Their discussion was based largely on __________, as they had few facts to work with.",
        chinese_question: "他们的讨论主要基于 __________，因为他们没有多少事实可以参考。",
        answers: [
                { option: "A", answer: "evidence", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
                { option: "B", answer: "conjecture", chinese_answer: "推测", chinese_romanization: "tuīcè" },
                { option: "C", answer: "truths", chinese_answer: "真相", chinese_romanization: "zhēnxiàng" },
                { option: "D", answer: "realities", chinese_answer: "现实", chinese_romanization: "xiànshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conjecture' means an opinion or conclusion formed on the basis of incomplete information." +
                "<br><br>" +
                "(A) 'evidence' means the available body of facts or information indicating whether a belief or proposition is true or valid." +
                "<br><br>" +
                "(C) 'truths' means the quality or state of being true." +
                "<br><br>" +
                "(D) 'realities' means the state of things as they actually exist.",
        chinese_explanation: "(B) '推测'一词意味着在不完全信息的基础上形成的意见或结论。" +
                "<br><br>" +
                "(A) '证据' 意味着表明某一信念或命题真实或有效的事实或信息的可用集合。" +
                "<br><br>" +
                "(C) '真相' 意味着真实的质量或状态。" +
                "<br><br>" +
                "(D) '现实' 意味着事物的实际存在状态。"
    },
    {
        id: 6,
        question: "The manager had serious __________ about the new hire's qualifications, fearing that he might not be up to the job.",
        chinese_question: "经理对新员工的资格有严重的 __________，担心他可能无法胜任这份工作。",
        answers: [
                { option: "A", answer: "qualms", chinese_answer: "不安", chinese_romanization: "bù'ān" },
                { option: "B", answer: "certainties", chinese_answer: "确定", chinese_romanization: "quèdìng" },
                { option: "C", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
                { option: "D", answer: "hopes", chinese_answer: "希望", chinese_romanization: "xīwàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'qualms' figuratively means uneasy feelings of doubt, worry, or fear, especially about one's own conduct; misgivings." +
                "<br><br>" +
                "(B) 'certainties' means firm conviction that something is the case." +
                "<br><br>" +
                "(C) 'trust' means firm belief in the reliability, truth, or ability of someone or something." +
                "<br><br>" +
                "(D) 'hopes' means a feeling of expectation and desire for a certain thing to happen.",
        chinese_explanation: "(A) '不安' 在此语境下意指对某事感到怀疑、担忧或恐惧的不安感觉，尤其是关于自己的行为；不安。" +
                "<br><br>" +
                "(B) '确定' 意味着对某事的坚定信念。" +
                "<br><br>" +
                "(C) '信任' 意味着对某人或某事可靠性、真实性或能力的坚定信念。" +
                "<br><br>" +
                "(D) '希望' 意味着对某事发生的期望和愿望。"
    },
    {
        id: 7,
        question: "He felt a deep sense of fulfillment in his __________, knowing that he was making a positive impact on the lives of his students.",
        chinese_question: "他在自己的 __________ 中感到深深的满足，因为他知道自己对学生的生活产生了积极的影响。",
        answers: [
                { option: "A", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" },
                { option: "B", answer: "vocation", chinese_answer: "职业", chinese_romanization: "zhíyè" },
                { option: "C", answer: "pastime", chinese_answer: "消遣", chinese_romanization: "xiāoqiǎn" },
                { option: "D", answer: "entertainment", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vocation' means a strong feeling of suitability for a particular career or occupation." +
                "<br><br>" +
                "(A) 'hobby' means an activity done regularly in one's leisure time for pleasure." +
                "<br><br>" +
                "(C) 'pastime' means an activity that someone does regularly for enjoyment rather than work; a hobby." +
                "<br><br>" +
                "(D) 'entertainment' means the action of providing or being provided with amusement or enjoyment.",
        chinese_explanation: "(B) '职业'一词意味着对特定职业或职业的强烈适应感。" +
                "<br><br>" +
                "(A) '爱好' 意味着在闲暇时间经常进行的活动以获得乐趣。" +
                "<br><br>" +
                "(C) '消遣' 意味着某人定期为享乐而不是工作而做的活动；爱好。" +
                "<br><br>" +
                "(D) '娱乐' 意味着提供或被提供娱乐或享受的行为。"
    },
    {
        id: 8,
    question: "The manager delegated the task to his __________, ensuring that every detail was handled efficiently.",
    chinese_question: "经理将任务分配给他的 __________，确保每个细节都得到高效处理。",
    answers: [
        { option: "A", answer: "subordinate", chinese_answer: "下属", chinese_romanization: "xiàshǔ" },
        { option: "B", answer: "superior", chinese_answer: "上司", chinese_romanization: "shàngsī" },
        { option: "C", answer: "colleague", chinese_answer: "同事", chinese_romanization: "tóngshì" },
        { option: "D", answer: "mentor", chinese_answer: "导师", chinese_romanization: "dǎoshī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'subordinate' means a person under the authority or control of another within an organization." +
                "<br><br>" +
                "(B) 'superior' means a person higher in rank, status, or quality." +
                "<br><br>" +
                "(C) 'colleague' means a person with whom one works, especially in a profession or business." +
                "<br><br>" +
                "(D) 'mentor' means an experienced and trusted adviser.",
    chinese_explanation: "(A) '下属' 意味着在组织内受他人权威或控制的人。" +
                "<br><br>" +
                "(B) '上司' 意味着等级、地位或质量较高的人。" +
                "<br><br>" +
                "(C) '同事' 意味着在职业或业务上与某人一起工作的人。" +
                "<br><br>" +
                "(D) '导师' 意味着有经验且值得信赖的顾问。"
    },
    {
        id: 9,
    question: "For the sake of __________, the review committee was composed of individuals with no prior involvement in the project.",
    chinese_question: "为了 __________，审查委员会由没有参与该项目的个人组成。",
    answers: [
        { option: "A", answer: "partiality", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
        { option: "B", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
        { option: "C", answer: "objectivity", chinese_answer: "客观性", chinese_romanization: "kèguān xìng" },
        { option: "D", answer: "subjectivity", chinese_answer: "主观性", chinese_romanization: "zhǔguān xìng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'objectivity' means the quality of being objective, unbiased, and not influenced by personal feelings or opinions." +
        "<br><br>" +
        "(A) 'partiality' means unfair bias in favor of one thing or person compared with another; favoritism." +
        "<br><br>" +
        "(B) 'bias' means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
        "<br><br>" +
        "(D) 'subjectivity' means based on or influenced by personal feelings, tastes, or opinions.",
    chinese_explanation: "(C) '客观性' 一词意味着客观、公正、不受个人感情或意见影响的品质。" +
        "<br><br>" +
        "(A) '偏袒' 意味着偏向某一事物或某人；偏爱。" +
        "<br><br>" +
        "(B) '偏见' 意味着对一个人或一群人的倾向或偏见，尤其是被认为不公平的方式。" +
        "<br><br>" +
        "(D) '主观性' 意味着基于或受个人感情、兴趣或意见影响的。"
    },
    {
        id: 10,
    question: "The movement gained momentum as more people expressed their __________ with the cause, joining protests and raising awareness.",
    chinese_question: "随着越来越多的人表达对该事业的 __________，参与抗议和提高意识，运动获得了动力。",
    answers: [
        { option: "A", answer: "solidarity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
        { option: "B", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "C", answer: "indifference", chinese_answer: "无动于衷", chinese_romanization: "wúdòng yúzhōng" },
        { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'solidarity' means unity or agreement of feeling or action, especially among individuals with a common interest; mutual support within a group." +
                "<br><br>" +
                "(B) 'apathy' means lack of interest, enthusiasm, or concern." +
                "<br><br>" +
                "(C) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(D) 'ignorance' means lack of knowledge or information.",
    chinese_explanation: "(A) '团结' 意味着特别是具有共同利益的个人之间的感情或行动的一致性；群体内部的相互支持。" +
                "<br><br>" +
                "(B) '冷漠' 意味着缺乏兴趣、热情或关心。" +
                "<br><br>" +
                "(C) '无动于衷' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(D) '无知' 意味着缺乏知识或信息。"
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
