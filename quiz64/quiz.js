// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The diplomat's __________ in brokering the peace agreement was praised internationally.",
        chinese_question: "这位外交官在促成和平协议方面表现出的 __________ 受到了国际上的赞誉。",
        answers: [
                { option: "A", answer: "incompetence", chinese_answer: "无能", chinese_romanization: "wúnéng" },
                { option: "B", answer: "finesse", chinese_answer: "技巧", chinese_romanization: "jìqiǎo" },
                { option: "C", answer: "awkwardness", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
                { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'finesse' means intricate and refined delicacy; skillful handling of a situation." +
                "<br><br>" +
                "(A) 'incompetence' means inability to do something successfully." +
                "<br><br>" +
                "(C) 'awkwardness' means lacking grace or ease in movement." +
                "<br><br>" +
                "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '技巧'一词意味着复杂而精细的技巧；巧妙处理情况。" +
                "<br><br>" +
                "(A) '无能' 意味着无法成功地做某事。" +
                "<br><br>" +
                "(C) '笨拙' 意味着缺乏优雅或轻松的动作。" +
                "<br><br>" +
                "(D) '冷漠' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 2,
    question: "The quick __________ from the fire department saved many lives.",
    chinese_question: "消防部门的迅速 __________ 挽救了许多生命。",
    answers: [
        { option: "A", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
        { option: "B", answer: "response", chinese_answer: "反应", chinese_romanization: "fǎnyìng" },
        { option: "C", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'response' means a reaction to something." +
        "<br><br>" +
        "(A) 'delay' means a period of time by which something is late or postponed." +
        "<br><br>" +
        "(C) 'error' means a mistake." +
        "<br><br>" +
        "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
    chinese_explanation: "(B) '反应' 意味着对某事的反应。" +
        "<br><br>" +
        "(A) '延迟' 意味着某事迟到或推迟的一段时间。" +
        "<br><br>" +
        "(C) '错误' 意味着错误。" +
        "<br><br>" +
        "(D) '犹豫' 意味着在说或做某事之前暂停或犹豫的行为。"
    },
    {
        id: 3,
    question: "Spending too much time on social media can be a __________ to one's mental health.",
    chinese_question: "花太多时间在社交媒体上对一个人的心理健康是一个 __________。",
    answers: [
        { option: "A", answer: "detriment", chinese_answer: "损害", chinese_romanization: "sǔnhài" },
        { option: "B", answer: "benefit", chinese_answer: "益处", chinese_romanization: "yìchù" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'detriment' means a cause of harm or damage." +
        "<br><br>" +
        "(B) 'benefit' means an advantage or profit gained from something." +
        "<br><br>" +
        "(C) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'aid' means help, typically of a practical nature.",
    chinese_explanation: "(A) '损害' 一词意味着造成伤害或损害的原因。" +
        "<br><br>" +
        "(B) '益处' 意味着从某事中获得的优势或利润。" +
        "<br><br>" +
        "(C) '支持' 意味着承受某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '帮助' 意味着通常是实质性的帮助。"
    },
    {
        id: 4,
    question: "Her __________ of strangers made her very cautious in new situations.",
    chinese_question: "她对陌生人的 __________ 使她在新情况下非常谨慎。",
    answers: [
        { option: "A", answer: "acceptance", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "B", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
        { option: "C", answer: "mistrust", chinese_answer: "不信任", chinese_romanization: "bù xìnrèn" },
        { option: "D", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mistrust' means lack of trust or confidence." +
        "<br><br>" +
        "(A) 'acceptance' means the action of consenting to receive or undertake something offered." +
        "<br><br>" +
        "(B) 'trust' means firm belief in the reliability, truth, ability, or strength of someone or something." +
        "<br><br>" +
        "(D) 'comfort' means a state of physical ease and freedom from pain or constraint.",
    chinese_explanation: "(C) '不信任' 意味着缺乏信任或信心。" +
        "<br><br>" +
        "(A) '接受' 意味着同意接受或承担所提供的东西。" +
        "<br><br>" +
        "(B) '信任' 意味着对某人或某事的可靠性、真实性、能力或力量的坚定信念。" +
        "<br><br>" +
        "(D) '舒适' 意味着身体舒适且无痛或约束的状态。"
    },
    {
        id: 5,
    question: "The doctor monitored the patient's symptoms for any signs of the __________ of the illness.",
    chinese_question: "医生监测病人的症状，寻找疾病 __________ 的任何迹象。",
    answers: [
        { option: "A", answer: "onset", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
        { option: "B", answer: "resolution", chinese_answer: "解决", chinese_romanization: "jiějué" },
        { option: "C", answer: "prevention", chinese_answer: "预防", chinese_romanization: "yùfáng" },
        { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'onset' means the beginning or start of something, especially something unpleasant." +
        "<br><br>" +
        "(B) 'resolution' means the action of solving a problem, dispute, or contentious matter." +
        "<br><br>" +
        "(C) 'prevention' means the action of stopping something from happening or arising." +
        "<br><br>" +
        "(D) 'delay' means the action of delaying or being delayed.",
    chinese_explanation: "(A) '开始' 意味着某事的开始，尤其是某些不愉快的事情的开始。" +
        "<br><br>" +
        "(B) '解决' 意味着解决问题、争议或争论性事项的行动。" +
        "<br><br>" +
        "(C) '预防' 意味着阻止某事发生或出现的行动。" +
        "<br><br>" +
        "(D) '延迟' 意味着延迟或被延迟的行为。"
    },
    {
        id: 6,
    question: "The actor’s performance in the critically acclaimed film was considered the __________ of his acting career.",
    chinese_question: "这位演员在备受好评的电影中的表现被认为是他演艺生涯的 __________。",
    answers: [
        { option: "A", answer: "apex", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" },
        { option: "B", answer: "nadir", chinese_answer: "最低点", chinese_romanization: "zuìdīdiǎn" },
        { option: "C", answer: "foundation", chinese_answer: "基础", chinese_romanization: "jīchǔ" },
        { option: "D", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'apex' figuratively means the highest or most successful point of something." +
        "<br><br>" +
        "(B) 'nadir' means the lowest point in the fortunes of a person or organization." +
        "<br><br>" +
        "(C) 'foundation' means the lowest load-bearing part of a building, typically below ground level." +
        "<br><br>" +
        "(D) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value.",
    chinese_explanation: "(A) '顶点' 在此语境下意指某事物的最高或最成功点。" +
        "<br><br>" +
        "(B) '最低点' 意味着一个人或组织命运的最低点。" +
        "<br><br>" +
        "(C) '基础' 意味着建筑物的最底部承重部分，通常在地面以下。" +
        "<br><br>" +
        "(D) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。"
    },
    {
        id: 7,
        question: "The __________ from the construction site next door was so loud that it interrupted their conversation.",
        chinese_question: "隔壁建筑工地的 __________ 大到打断了他们的谈话。",
        answers: [
                { option: "A", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
                { option: "B", answer: "din", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
                { option: "C", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
                { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'din' means a loud, unpleasant, and prolonged noise." +
                "<br><br>" +
                "(A) 'quiet' means the absence of noise or bustle; silence; calm." +
                "<br><br>" +
                "(C) 'calm' means the absence of violent or confrontational activity within a place or group." +
                "<br><br>" +
                "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(B) '喧闹'一词意味着嘈杂、令人不愉快且持续的噪音。" +
                "<br><br>" +
                "(A) '安静' 意味着没有噪音或喧嚣；安静；平静。" +
                "<br><br>" +
                "(C) '平静' 意味着一个地方或团体内部没有暴力或对抗活动。" +
                "<br><br>" +
                "(D) '和平' 意味着没有干扰；宁静。"
    },
    {
        id: 8,
        question: "The company's success can be attributed to its CEO, a __________ who always prioritizes efficiency and results.",
        chinese_question: "公司的成功归功于其 CEO，一个总是优先考虑效率和结果的 __________。",
        answers: [
                { option: "A", answer: "theorist", chinese_answer: "理论家", chinese_romanization: "lǐlùn jiā" },
                { option: "B", answer: "pragmatist", chinese_answer: "实用主义者", chinese_romanization: "shíyòng zhǔyì zhě" },
                { option: "C", answer: "romantic", chinese_answer: "浪漫主义者", chinese_romanization: "làngmàn zhǔyì zhě" },
                { option: "D", answer: "philosopher", chinese_answer: "哲学家", chinese_romanization: "zhéxué jiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pragmatist' means a person who is guided more by practical considerations than by ideals." +
                "<br><br>" +
                "(A) 'theorist' means a person concerned with the theoretical aspects of a subject." +
                "<br><br>" +
                "(C) 'romantic' means a person who is characterized by or suggests impractical and idealized views of life." +
                "<br><br>" +
                "(D) 'philosopher' means a person engaged or learned in philosophy, especially as an academic discipline.",
        chinese_explanation: "(B) '实用主义者'一词意味着一个更多地受到实际考虑而不是理想指导的人。" +
                "<br><br>" +
                "(A) '理论家' 意味着一个关注某个主题的理论方面的人。" +
                "<br><br>" +
                "(C) '浪漫主义者' 意味着一个以不切实际和理想化的生活观为特征或暗示的人。" +
                "<br><br>" +
                "(D) '哲学家' 意味着一个从事或学习哲学的人，尤其是作为学术学科的人。"
    },
    {
        id: 9,
        question: "The __________ of the artist’s talents was showcased in the diverse styles and mediums used in the exhibition.",
        chinese_question: "艺术家的才华 __________ 在展览中展示的各种风格和媒介中得到了体现。",
        answers: [
                { option: "A", answer: "breadth", chinese_answer: "广度", chinese_romanization: "guǎngdù" },
                { option: "B", answer: "focus", chinese_answer: "焦点", chinese_romanization: "jiāodiǎn" },
                { option: "C", answer: "intensity", chinese_answer: "强度", chinese_romanization: "qiángdù" },
                { option: "D", answer: "limitation", chinese_answer: "限制", chinese_romanization: "xiànzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'breadth' figuratively means the extent or range of knowledge, experience, or activity." +
                "<br><br>" +
                "(B) 'focus' means the center of interest or activity." +
                "<br><br>" +
                "(C) 'intensity' means the quality of being intense." +
                "<br><br>" +
                "(D) 'limitation' means a restriction or boundary.",
        chinese_explanation: "(A) '广度' 在此语境下意指知识、经验或活动的范围或程度。" +
                "<br><br>" +
                "(B) '焦点' 意味着兴趣或活动的中心。" +
                "<br><br>" +
                "(C) '强度' 意味着强烈的质量。" +
                "<br><br>" +
                "(D) '限制' 意味着限制或界限。"
    },
    {
        id: 10,
    question: "The CEO acknowledged the hard work and dedication of each __________ during the annual company meeting.",
    chinese_question: "在年度公司会议上，首席执行官表彰了每位 __________ 的辛勤工作和奉献精神。",
    answers: [
        { option: "A", answer: "subordinate", chinese_answer: "下属", chinese_romanization: "xiàshǔ" },
        { option: "B", answer: "supervisor", chinese_answer: "监督", chinese_romanization: "jiāndū" },
        { option: "C", answer: "peer", chinese_answer: "同龄人", chinese_romanization: "tónglíng rén" },
        { option: "D", answer: "client", chinese_answer: "客户", chinese_romanization: "kèhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'subordinate' means a person under the authority or control of another within an organization." +
                "<br><br>" +
                "(B) 'supervisor' means a person who supervises a person or an activity." +
                "<br><br>" +
                "(C) 'peer' means a person of the same age, status, or ability as another specified person." +
                "<br><br>" +
                "(D) 'client' means a person or organization using the services of a lawyer or other professional person or company.",
    chinese_explanation: "(A) '下属' 意味着在组织内受他人权威或控制的人。" +
                "<br><br>" +
                "(B) '监督' 意味着监督某人或某项活动的人。" +
                "<br><br>" +
                "(C) '同龄人' 意味着与另一特定人年龄、地位或能力相同的人。" +
                "<br><br>" +
                "(D) '客户' 意味着使用律师或其他专业人士或公司的服务的个人或组织。"
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
