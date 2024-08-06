// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
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
        id: 2,
    question: "In the busy rhythm of daily life, finding a quiet __________ to meditate can be incredibly refreshing.",
    chinese_question: "在日常生活的繁忙节奏中，找到一个安静的 __________ 来冥想可以非常令人精神焕发。",
    answers: [
        { option: "A", answer: "conundrum", chinese_answer: "难题", chinese_romanization: "nántí" },
        { option: "B", answer: "interlude", chinese_answer: "间奏", chinese_romanization: "jiānzòu" },
        { option: "C", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "D", answer: "interruption", chinese_answer: "中断", chinese_romanization: "zhōngduàn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'interlude' means a period of temporary relief from continuous activity." +
        "<br><br>" +
        "(A) 'conundrum' means a confusing and difficult problem or question." +
        "<br><br>" +
        "(C) 'chaos' means complete disorder and confusion." +
        "<br><br>" +
        "(D) 'interruption' means a break in continuity.",
    chinese_explanation: "(B) '间奏' 一词意味着持续活动中的暂时解脱。" +
        "<br><br>" +
        "(A) '难题' 意味着令人困惑和困难的问题。" +
        "<br><br>" +
        "(C) '混乱' 意味着完全的混乱和困惑。" +
        "<br><br>" +
        "(D) '中断' 意味着连续性的中断。"
    },
    {
        id: 3,
    question: "Traffic is usually at its __________ during rush hour in the city, with gridlocked streets and honking horns everywhere, making it difficult to get anywhere on time.",
    chinese_question: "城市里的交通通常在高峰时段达到 __________，街道堵塞，到处喇叭声，使得很难准时到达任何地方。",
    answers: [
        { option: "A", answer: "peak", chinese_answer: "高峰", chinese_romanization: "gāofēng" },
        { option: "B", answer: "lowest", chinese_answer: "最低", chinese_romanization: "zuìdī" },
        { option: "C", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
        { option: "D", answer: "minimal", chinese_answer: "最小", chinese_romanization: "zuìxiǎo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'peak' means the highest point." +
        "<br><br>" +
        "(B) 'lowest' means the bottom or minimum point." +
        "<br><br>" +
        "(C) 'average' means a number expressing the central or typical value in a set of data." +
        "<br><br>" +
        "(D) 'minimal' means the least amount possible.",
    chinese_explanation: "(A) '高峰' 意味着最高点。" +
        "<br><br>" +
        "(B) '最低' 意味着底部或最低点。" +
        "<br><br>" +
        "(C) '平均' 意味着表示一组数据中的中心值或典型值的数字。" +
        "<br><br>" +
        "(D) '最小' 意味着可能的最少量。"
    },
    {
        id: 4,
    question: "The intern flourished under the __________ of the senior engineers at the firm.",
    chinese_question: "在公司高级工程师的 __________ 下，这名实习生茁壮成长。",
    answers: [
        { option: "A", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "tutelage", chinese_answer: "指导", chinese_romanization: "zhǐdǎo" },
        { option: "C", answer: "rebellion", chinese_answer: "叛乱", chinese_romanization: "pànluàn" },
        { option: "D", answer: "abandonment", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'tutelage' means protection of or authority over someone; instruction or guidance." +
        "<br><br>" +
        "(A) 'disregard' means to pay no attention to; ignore." +
        "<br><br>" +
        "(C) 'rebellion' means an act of violent or open resistance to an established government or ruler." +
        "<br><br>" +
        "(D) 'abandonment' means the action or fact of abandoning or being abandoned.",
    chinese_explanation: "(B) '指导' 意味着对某人的保护或权威；指导或引导。" +
        "<br><br>" +
        "(A) '忽视' 意味着不注意；忽略。" +
        "<br><br>" +
        "(C) '叛乱' 意味着对既定政府或统治者的暴力或公开抵抗。" +
        "<br><br>" +
        "(D) '放弃' 意味着放弃或被放弃的行为或事实。"
    },
    {
        id: 5,
        question: "The author received a __________ of criticism following the publication of his controversial article.",
        chinese_question: "这位作家在发表有争议的文章后，收到了 __________ 的批评。",
        answers: [
                { option: "A", answer: "spate", chinese_answer: "大量", chinese_romanization: "dàliàng" },
                { option: "B", answer: "trickle", chinese_answer: "小股", chinese_romanization: "xiǎogǔ" },
                { option: "C", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
                { option: "D", answer: "shortage", chinese_answer: "短缺", chinese_romanization: "duǎnquē" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spate' means a large number of similar things or events appearing or occurring in quick succession." +
                "<br><br>" +
                "(B) 'trickle' means a small flow of liquid." +
                "<br><br>" +
                "(C) 'scarcity' means the state of being scarce or in short supply; shortage." +
                "<br><br>" +
                "(D) 'shortage' means a state or situation in which something needed cannot be obtained in sufficient amounts.",
        chinese_explanation: "(A) '大量' 意味着大量相似的事物或事件迅速出现或发生。" +
                "<br><br>" +
                "(B) '小股' 意味着少量的液体流动。" +
                "<br><br>" +
                "(C) '稀缺' 意味着稀少或短缺的状态。" +
                "<br><br>" +
                "(D) '短缺' 意味着某物无法足量获得的状态或情况。"
    },
    {
        id: 6,
    question: "The inventor's workshop was cluttered with bizarre __________, each one more unusual than the last, like a miniature submarine and a bicycle-powered toaster.",
    chinese_question: "发明家的工作室里杂乱地堆满了奇怪的 __________，每一个都比上一个更不寻常，比如一个微型潜艇和一个自行车驱动的烤面包机。",
    answers: [
        { option: "A", answer: "paradoxes", chinese_answer: "悖论", chinese_romanization: "bèilùn" },
        { option: "B", answer: "contraptions", chinese_answer: "奇妙装置", chinese_romanization: "qímiào zhuāngzhì" },
        { option: "C", answer: "anomalies", chinese_answer: "异常现象", chinese_romanization: "yìcháng xiànxiàng" },
        { option: "D", answer: "enigmas", chinese_answer: "谜团", chinese_romanization: "mí tuán" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'contraptions' means machines or devices that appear strange or unnecessarily complicated." +
        "<br><br>" +
        "(A) 'paradoxes' means statements or propositions that, despite sound reasoning, lead to conclusions that seem senseless or self-contradictory." +
        "<br><br>" +
        "(C) 'anomalies' means things that deviate from what is standard, normal, or expected." +
        "<br><br>" +
        "(D) 'enigmas' means things that are mysterious, puzzling, or difficult to understand.",
    chinese_explanation: "(B) '奇妙装置' 一词意味着看起来奇怪或不必要复杂的机器或装置。" +
        "<br><br>" +
        "(A) '悖论' 意味着尽管有合理的推理，但导致看起来无意义或自相矛盾的结论的陈述或主张。" +
        "<br><br>" +
        "(C) '异常现象' 意味着偏离标准、正常或预期的事物。" +
        "<br><br>" +
        "(D) '谜团' 意味着神秘的、令人困惑或难以理解的事物。"
    },
    {
        id: 7,
    question: "To manage his busy __________, he uses a planner to keep track of all his tasks and appointments.",
    chinese_question: "为了管理他繁忙的 __________，他使用计划本来记录所有任务和预约。",
    answers: [
        { option: "A", answer: "dream", chinese_answer: "梦想", chinese_romanization: "mèngxiǎng" },
        { option: "B", answer: "routine", chinese_answer: "日常", chinese_romanization: "rìcháng" },
        { option: "C", answer: "schedule", chinese_answer: "时间表", chinese_romanization: "shíjiān biǎo" },
        { option: "D", answer: "relaxation", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'schedule' means a plan for carrying out a process or procedure, giving lists of intended events and times." +
        "<br><br>" +
        "(A) 'dream' means a series of thoughts, images, and sensations occurring in a person's mind during sleep." +
        "<br><br>" +
        "(B) 'routine' means a sequence of actions regularly followed; a fixed program." +
        "<br><br>" +
        "(D) 'relaxation' means the state of being free from tension and anxiety.",
    chinese_explanation: "(C) '时间表' 意味着计划执行的过程或程序，列出预定的事件和时间。" +
        "<br><br>" +
        "(A) '梦想' 意味着一个人在睡眠时发生的一系列想法、图像和感觉。" +
        "<br><br>" +
        "(B) '日常' 意味着定期遵循的行动序列；固定的程序。" +
        "<br><br>" +
        "(D) '放松' 意味着没有紧张和焦虑的状态。"
    },
    {
        id: 8,
    question: "The __________ of implementing a new policy was questioned by several board members due to budget constraints.",
    chinese_question: "由于预算限制，几位董事会成员质疑实施新政策的 __________。",
    answers: [
        { option: "A", answer: "feasibility", chinese_answer: "可行性", chinese_romanization: "kěxíng xìng" },
        { option: "B", answer: "inevitability", chinese_answer: "必然性", chinese_romanization: "bìrán xìng" },
        { option: "C", answer: "rarity", chinese_answer: "稀有", chinese_romanization: "xīyǒu" },
        { option: "D", answer: "fragility", chinese_answer: "脆弱性", chinese_romanization: "cuìruò xìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'feasibility' figuratively means the practicality or possibility of something being accomplished." +
        "<br><br>" +
        "(B) 'inevitability' means the quality of being certain to happen." +
        "<br><br>" +
        "(C) 'rarity' means the state or quality of being rare." +
        "<br><br>" +
        "(D) 'fragility' means the quality of being easily broken or damaged.",
    chinese_explanation: "(A) '可行性' 在此语境下意指某事得以完成的实用性或可能性。" +
        "<br><br>" +
        "(B) '必然性' 意味着确定发生的质量。" +
        "<br><br>" +
        "(C) '稀有' 意味着稀有的状态或质量。" +
        "<br><br>" +
        "(D) '脆弱性' 意味着易碎或易受损的质量。"
    },
    {
        id: 9,
    question: "The soccer match was interrupted by a __________ between rival fans, causing the game to be temporarily halted.",
    chinese_question: "足球比赛因敌对球迷之间的 __________ 而中断，导致比赛暂时停止。",
    answers: [
        { option: "A", answer: "brawl", chinese_answer: "斗殴", chinese_romanization: "dòu'ōu" },
        { option: "B", answer: "debate", chinese_answer: "辩论", chinese_romanization: "biànlùn" },
        { option: "C", answer: "conversation", chinese_answer: "谈话", chinese_romanization: "tánhuà" },
        { option: "D", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'brawl' means a rough or noisy fight or quarrel." +
        "<br><br>" +
        "(B) 'debate' means a formal discussion on a particular matter in a public meeting or legislative assembly, in which opposing arguments are put forward." +
        "<br><br>" +
        "(C) 'conversation' means a talk, especially an informal one, between two or more people, in which news and ideas are exchanged." +
        "<br><br>" +
        "(D) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
    chinese_explanation: "(A) '斗殴' 意味着一场粗暴或喧闹的打斗或争吵。" +
        "<br><br>" +
        "(B) '辩论' 意味着在公共会议或立法机构中对某一特定事项进行的正式讨论，其中提出了对立的论点。" +
        "<br><br>" +
        "(C) '谈话' 意味着两人或多人之间的谈话，特别是非正式的谈话，交换新闻和想法。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过参加愉快的社交活动来纪念一个重要事件或场合的行为。"
    },
    {
        id: 10,
    question: "His __________ about starting a new job was mixed with excitement and nervousness, as he was eager to prove himself but unsure of what to expect.",
    chinese_question: "他对新工作的 __________ 夹杂着兴奋和紧张，因为他渴望证明自己，但又不确定会遇到什么。",
    answers: [
        { option: "A", answer: "apprehension", chinese_answer: "忧虑", chinese_romanization: "yōulǜ" },
        { option: "B", answer: "confidence", chinese_answer: "信心", chinese_romanization: "xìnxīn" },
        { option: "C", answer: "satisfaction", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'apprehension' means anxiety or fear that something bad or unpleasant will happen." +
        "<br><br>" +
        "(B) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
        "<br><br>" +
        "(C) 'satisfaction' means fulfillment of one's wishes, expectations, or needs, or the pleasure derived from this." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(A) '忧虑' 意味着对某事不好的或不愉快的事情将要发生的焦虑或恐惧。" +
        "<br><br>" +
        "(B) '信心' 意味着相信自己可以依赖某人或某事的感觉或信念；坚定的信任。" +
        "<br><br>" +
        "(C) '满意' 意味着实现一个人的愿望、期望或需求，或从中获得的快乐。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
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
