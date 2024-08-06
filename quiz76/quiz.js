// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The festival ended in __________ as the crowds surged forward, overwhelming the security.",
        chinese_question: "随着人群向前涌动，安全人员被压垮，节日结束时一片 __________ 。",
        answers: [
            { option: "A", answer: "organization", chinese_answer: "组织", chinese_romanization: "zǔzhī" },
            { option: "B", answer: "orderliness", chinese_answer: "有序", chinese_romanization: "yǒuxù" },
            { option: "C", answer: "serenity", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "D", answer: "mayhem", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mayhem' means a state of chaos and disorder." +
            "<br><br>" +
            "(A) 'organization' means the act of arranging or being arranged." +
            "<br><br>" +
            "(B) 'orderliness' means the quality of being neat and orderly." +
            "<br><br>" +
            "(C) 'serenity' means the state of being calm and peaceful.",
        chinese_explanation: "(D) '混乱' 意味着一种混乱和无序的状态。" +
            "<br><br>" +
            "(A) '组织' 意味着安排或被安排的行为。" +
            "<br><br>" +
            "(B) '有序' 意味着整洁和有序的品质。" +
            "<br><br>" +
            "(C) '宁静' 意味着平静和安详的状态。"
    },
    {
        id: 2,
    question: "The lawyer’s __________ that her client was innocent was backed up by new evidence presented in court.",
    chinese_question: "律师 __________ 她的客户是无辜的言论得到了法庭上提出的新证据的支持。",
    answers: [
        { option: "A", answer: "assertion", chinese_answer: "断言", chinese_romanization: "duànyán" },
        { option: "B", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "C", answer: "confession", chinese_answer: "供认", chinese_romanization: "gòngrèn" },
        { option: "D", answer: "admission", chinese_answer: "承认", chinese_romanization: "chéngrèn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'assertion' figuratively means a confident and forceful statement of fact or belief." +
        "<br><br>" +
        "(B) 'doubt' means a feeling of uncertainty or lack of conviction." +
        "<br><br>" +
        "(C) 'confession' means a formal statement admitting that one is guilty of a crime." +
        "<br><br>" +
        "(D) 'admission' means a statement acknowledging the truth of something.",
    chinese_explanation: "(A) '断言' 在此语境下意指自信和有力的事实或信念的陈述。" +
        "<br><br>" +
        "(B) '怀疑' 意味着不确定或缺乏信念的感觉。" +
        "<br><br>" +
        "(C) '供认' 意味着正式承认自己有罪的声明。" +
        "<br><br>" +
        "(D) '承认' 意味着承认某事是真实的声明。"
    },
    {
        id: 3,
    question: "The weekend was a much-needed __________ from the stresses of the workweek.",
    chinese_question: "周末是工作周压力的一种急需的 __________。",
    answers: [
        { option: "A", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
        { option: "B", answer: "reprieve", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "C", answer: "intensification", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "D", answer: "punishment", chinese_answer: "惩罚", chinese_romanization: "chéngfá" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reprieve' means a temporary relief from something, especially from something unpleasant." +
        "<br><br>" +
        "(A) 'burden' means a load, especially a heavy one." +
        "<br><br>" +
        "(C) 'intensification' means the action of becoming or making something stronger or more extreme." +
        "<br><br>" +
        "(D) 'punishment' means the infliction or imposition of a penalty as retribution for an offense.",
    chinese_explanation: "(B) '缓解'一词意味着暂时缓解某事，尤其是某些不愉快的事情。" +
        "<br><br>" +
        "(A) '负担' 意味着负荷，尤其是沉重的负荷。" +
        "<br><br>" +
        "(C) '加剧' 意味着变得更强或更极端的行为。" +
        "<br><br>" +
        "(D) '惩罚' 意味着作为报复性惩罚的处罚或强加。"
    },
    {
        id: 4,
    question: "The novel describes the character's descent into __________ by highlighting his immoral behavior and reckless lifestyle.",
    chinese_question: "小说描述了角色陷入 __________ 的过程，通过突显他的不道德行为和放荡的生活方式。",
    answers: [
        { option: "A", answer: "debauchery", chinese_answer: "放荡", chinese_romanization: "fàngdàng" },
        { option: "B", answer: "virtue", chinese_answer: "美德", chinese_romanization: "měidé" },
        { option: "C", answer: "discipline", chinese_answer: "纪律", chinese_romanization: "jìlǜ" },
        { option: "D", answer: "austerity", chinese_answer: "严厉", chinese_romanization: "yánlì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'debauchery' means excessive indulgence in sensual pleasures, typically involving excessive drinking and promiscuity." +
        "<br><br>" +
        "(B) 'virtue' means behavior showing high moral standards." +
        "<br><br>" +
        "(C) 'discipline' means the practice of training people to obey rules or a code of behavior." +
        "<br><br>" +
        "(D) 'austerity' means sternness or severity of manner or attitude.",
    chinese_explanation: "(A) '放荡' 意味着沉迷于感官享受，通常涉及酗酒和淫乱。" +
        "<br><br>" +
        "(B) '美德' 意味着表现出高道德标准的行为。" +
        "<br><br>" +
        "(C) '纪律' 意味着训练人们遵守规则或行为准则的实践。" +
        "<br><br>" +
        "(D) '严厉' 意味着态度或方式的严厉。"
    },
    {
        id: 5,
    question: "The student's __________ about the upcoming exam was clear from the way she kept fidgeting and glancing at her notes.",
    chinese_question: "从她不断坐立不安和看笔记的方式来看，这名学生对即将到来的考试充满了 __________。",
    answers: [
        { option: "A", answer: "apprehension", chinese_answer: "忧虑", chinese_romanization: "yōulǜ" },
        { option: "B", answer: "confidence", chinese_answer: "信心", chinese_romanization: "xìnxīn" },
        { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'apprehension' means anxiety or fear that something bad or unpleasant will happen." +
        "<br><br>" +
        "(B) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
        "<br><br>" +
        "(C) 'excitement' means a feeling of great enthusiasm and eagerness." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(A) '忧虑' 意味着对某事不好的或不愉快的事情将要发生的焦虑或恐惧。" +
        "<br><br>" +
        "(B) '信心' 意味着相信自己可以依赖某人或某事的感觉或信念；坚定的信任。" +
        "<br><br>" +
        "(C) '兴奋' 意味着极大的热情和渴望的感觉。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 6,
        question: "The term 'silent movie' is a __________ because the films were never truly silent; they often had musical accompaniments.",
        chinese_question: "'无声电影'这个词是一个 __________，因为这些电影从未真正无声；它们通常有音乐伴奏。",
        answers: [
                { option: "A", answer: "euphemism", chinese_answer: "委婉语", chinese_romanization: "wěiwǎn yǔ" },
                { option: "B", answer: "metaphor", chinese_answer: "隐喻", chinese_romanization: "yǐnyù" },
                { option: "C", answer: "misnomer", chinese_answer: "用词不当", chinese_romanization: "yòngcí bùdàng" },
                { option: "D", answer: "hyperbole", chinese_answer: "夸张", chinese_romanization: "kuāzhāng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'misnomer' means a wrong or inaccurate name or designation." +
                "<br><br>" +
                "(A) 'euphemism' means a mild or indirect word or expression substituted for one considered to be too harsh or blunt." +
                "<br><br>" +
                "(B) 'metaphor' means a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable." +
                "<br><br>" +
                "(D) 'hyperbole' means exaggerated statements or claims not meant to be taken literally.",
        chinese_explanation: "(C) '用词不当' 意味着错误或不准确的名称或指定。" +
                "<br><br>" +
                "(A) '委婉语' 意味着用一个温和或间接的词或表达代替一个被认为过于苛刻或直率的词或表达。" +
                "<br><br>" +
                "(B) '隐喻' 意味着一种比喻，将一个词或短语应用于一个对象或行为，而这个词或短语并不字面适用。" +
                "<br><br>" +
                "(D) '夸张' 意味着夸大的陈述或主张，不应被字面理解。"
    },
    {
        id: 7,
    question: "Despite his denial, the __________ about his resignation continued to circulate.",
    chinese_question: "尽管他否认了，关于他辞职的 __________ 仍在流传。",
    answers: [
        { option: "A", answer: "rumour", chinese_answer: "谣言", chinese_romanization: "yáoyán" },
        { option: "B", answer: "announcement", chinese_answer: "宣布", chinese_romanization: "xuānbù" },
        { option: "C", answer: "proof", chinese_answer: "证明", chinese_romanization: "zhèngmíng" },
        { option: "D", answer: "certainty", chinese_answer: "确定", chinese_romanization: "quèdìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rumour' means a currently circulating story or report of uncertain or doubtful truth." +
        "<br><br>" +
        "(B) 'announcement' means a public and typically formal statement about a fact, occurrence, or intention." +
        "<br><br>" +
        "(C) 'proof' means evidence or argument establishing a fact or the truth of a statement." +
        "<br><br>" +
        "(D) 'certainty' means firm conviction that something is the case.",
    chinese_explanation: "(A) '谣言' 意味着目前流传的关于不确定或可疑真相的故事或报告。" +
        "<br><br>" +
        "(B) '宣布' 意味着关于事实、事件或意图的公开且通常正式的声明。" +
        "<br><br>" +
        "(C) '证明' 意味着建立事实或陈述真实性的证据或论点。" +
        "<br><br>" +
        "(D) '确定' 意味着对某事是这样坚定的信念。"
    },
    {
        id: 8,
    question: "As the idea began to take shape in his mind, he felt a __________ of hope that it could work.",
    chinese_question: "随着这个想法在他脑海中逐渐成形，他感到了一丝 __________ 的希望，觉得它可能会成功。",
    answers: [
        { option: "A", answer: "shadow", chinese_answer: "阴影", chinese_romanization: "yīnyǐng" },
        { option: "B", answer: "glimmer", chinese_answer: "微光", chinese_romanization: "wéiguāng" },
        { option: "C", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "D", answer: "certainty", chinese_answer: "确信", chinese_romanization: "quèxìn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'glimmer' means a faint or wavering light, often used figuratively to indicate a slight or initial indication of something." +
        "<br><br>" +
        "(A) 'shadow' means a dark area or shape produced by a body coming between rays of light and a surface." +
        "<br><br>" +
        "(C) 'doubt' means a feeling of uncertainty or lack of conviction." +
        "<br><br>" +
        "(D) 'certainty' means firm conviction that something is the case.",
    chinese_explanation: "(B) '微光' 意味着微弱或摇曳的光，通常用于比喻表示某事物的轻微或初步迹象。" +
        "<br><br>" +
        "(A) '阴影' 意味着物体在光线和表面之间产生的黑暗区域或形状。" +
        "<br><br>" +
        "(C) '怀疑' 意味着不确定或缺乏信心的感觉。" +
        "<br><br>" +
        "(D) '确信' 意味着坚信某事是事实的信念。"
    },
    {
        id: 9,
        question: "As the team leader, it was his __________ to make the final decision on the project direction, not the team members' or managers'.",
        chinese_question: "作为团队领导，做出项目方向的最终决定是他的 __________，而不是团队成员或经理的。",
        answers: [
            { option: "A", answer: "anachronism", chinese_answer: "时代错误", chinese_romanization: "shídài cuòwù" },
            { option: "B", answer: "misnomer", chinese_answer: "误称", chinese_romanization: "wùchēng" },
            { option: "C", answer: "oxymoron", chinese_answer: "矛盾修饰法", chinese_romanization: "máodùn xiūshì fǎ" },
            { option: "D", answer: "prerogative", chinese_answer: "特权", chinese_romanization: "tèquán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prerogative' means a right or privilege exclusive to a particular individual or class." +
            "<br><br>" +
            "(A) 'anachronism' means a thing belonging or appropriate to a period other than that in which it exists, especially a thing that is conspicuously old-fashioned." +
            "<br><br>" +
            "(B) 'misnomer' means a wrong or inaccurate name or designation." +
            "<br><br>" +
            "(C) 'oxymoron' means a figure of speech in which apparently contradictory terms appear in conjunction.",
        chinese_explanation: "(D) '特权' 意味着某个个人或阶级专有的权利或特权。" +
            "<br><br>" +
            "(A) '时代错误' 意味着属于或适合于其存在的时期以外的事物，尤其是显眼的老式事物。" +
            "<br><br>" +
            "(B) '误称' 意味着错误的或不准确的名称或指定。" +
            "<br><br>" +
            "(C) '矛盾修饰法' 意味着一种修辞手法，其中明显矛盾的术语一起出现。"
    },
    {
        id: 10,
    question: "Her accomplishments as a writer reached their __________ with the publication of her critically acclaimed novel, which won numerous awards.",
    chinese_question: "随着她的备受好评的小说出版并获得众多奖项，她作为作家的成就达到了 __________。",
    answers: [
        { option: "A", answer: "apex", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" },
        { option: "B", answer: "foundation", chinese_answer: "基础", chinese_romanization: "jīchǔ" },
        { option: "C", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
        { option: "D", answer: "plateau", chinese_answer: "高原", chinese_romanization: "gāoyuán" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'apex' figuratively means the highest or most successful point of something." +
        "<br><br>" +
        "(B) 'foundation' means the lowest load-bearing part of a building, typically below ground level." +
        "<br><br>" +
        "(C) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
        "<br><br>" +
        "(D) 'plateau' means an area of relatively level high ground; also used figuratively to describe a state of little or no change following a period of activity or progress.",
    chinese_explanation: "(A) '顶点' 在此语境下意指某事物的最高或最成功点。" +
        "<br><br>" +
        "(B) '基础' 意味着建筑物的最底部承重部分，通常在地面以下。" +
        "<br><br>" +
        "(C) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
        "<br><br>" +
        "(D) '高原' 意味着相对平坦的高地；也比喻在一段活动或进展之后的无变化状态。"
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
