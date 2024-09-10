import React from "react";



const TestText = () => {
  return (
    <div>
      <div>Test Text</div>
      <div>
        Hey everybody, it&apos;s Claire. Welcome back to another web dev Wednesday.
        Today we are moving on from HTML and CSS to JavaScript, and I intend
        this video to be just a quick overview of the basic concepts you will
        need to know before going in and learning more complex functionality
        using JavaScript. But JavaScript is a scripting language. It adds a lot
        of functionality and dynamic effects and interaction with the user on a
        web page. So it&apos;s sort of the next step beyond just your markup and then
        your styles. It is the dynamic functionality that JavaScript is pretty
        much the industry standard to learn. So just to get started, these are
        the concepts of JavaScript that I&apos;m going to try and cover real quick
        today, and we will continue revisiting these of course, as we get
        further into the topic. But these are just some terms that you will need
        to understand as well as understanding how they interact with each other
        before moving on. So we&apos;re going to be covering variables, which is like
        a container for some content. So the content of variables can change.
        It&apos;s just a way to refer to elements that may take up more code space
        with just like a short quick name. And it&apos;s usually semantic, so it
        helps readability in your code. Events are things like clicking and
        scrolling and things happening on your page that JavaScript can then
        react to. Or you can attach some functionality to different events. And
        then functions are a way to put a bunch of code into this function which
        you name, and then you can refer to it in your code a bunch of times or
        here and there, or attach it to events. And again, it&apos;s another way to
        prevent repeating code and refer to a functionality with just usually a
        semantic name that makes it clear what is going to be doing. And I&apos;m
        going to touch on conditional statements, which are usually part of
        functions. So conditional is just if else. So we&apos;re going to test a
        condition. So if something is a certain way, do this else do something
        else. And this will again make sense as we get going. Okay, so this is
        just a little page I put together. You can see in the markup here we
        have a button and we have a div with the id of change me. And then over
        here, okay, and then you see we link to this style sheet which is just
        targeting this change me div, making it a square, giving it a little bit
        of a margin, centering it and giving it a background color. And I just
        centered everything on the page and then down here at the bottom. This
        is something new. This is a script tag where we are linking to an
        external my scripts J&apos;s file, JavaScript file, which over here is empty
        and you load a script at the bottom of your body tag as opposed to in
        the head tag because typically you&apos;re going to be referring to your HTML
        down here and some JavaScript will load with the page and you want it to
        be after things that it&apos;s referring to. So just a standard practice to
        load your script in the bottom and it uses a source attribute as opposed
        to, to ahref. But here&apos;s our page, it&apos;s just a non functional button
        with a box. So to get started we&apos;re going to assign some variables in
        our JavaScript file and the way you declare a variable is just VaR and
        then the name of the variable. So let&apos;s do a variable called button and
        a variable called box. Okay, now I&apos;m going to set this equal to, I could
        just leave it at this, JavaScript ends with a semicolon and then later
        we could do, you know, button equals and set a value in here, but I&apos;m
        going to declare what this button is, what&apos;s going to be inside the
        variable, what the variable will be right at the start. And this brings
        in something else that I want to talk about, which is property
        accessors. So kind of how selectors in CSS sort of dig into our document
        and grab what we want to style. Property accessors do the same thing
        with JavaScript, but they&apos;re done in the dot notation. So what I mean by
        that is document Dot. And then whatever we put after this is going to be
        what we&apos;re targeting here. So JavaScript has some methods which are just
        built in, actions that they do, they&apos;re very useful. I&apos;m going to use
        the query selector method and methods have parentheses after their name,
        same way functions do, which we will get into. So the query selector
        method you just put in here, what HTML element, basically what tag you
        want to grab, we are going to grab the button right here. So we do
        queryselector button and now this button in HTML has been assigned to
        the variable button in JavaScript. This just means we can access that
        button and do something to it within our JavaScript code without typing
        out the whole selector. Okay, and so for the box we&apos;re going to do
        something similar. We&apos;re going to use a property accessor, but the
        method we&apos;re going to use instead of Queryselector is getelement bye id.
        This is another method in JavaScript that pretty self explanatory, it
        gets the element in our HTML that it&apos;s linked to by its id. And
        remember, the div that is our box has the id of change me. So in the
        parentheses here of our method we just put change me. Now this div is in
        our variable, in our JavaScript, and we can do things with them. So what
        we want to do is when we click this button, we want this box to change
        color. So we have to add an event first of all to the button. We just
        want to add the onclick event. So when the button is clicked that&apos;s an
        event that then we want the code to do something. So we&apos;re going to
        target a button again on click. This is the event we are adding. We want
        to set it to equal function. We&apos;re going to call our function change
        color. Remember how I said methods have parentheses after them?
        Functions are always this is the name of the function, and these
        parentheses here make this a function. So we know we&apos;re calling a
        function. And this will make sense when we&apos;re calling it somewhere else
        in the code, not right after declaring it. So we&apos;re declaring a function
        called change color, and then after the name with the parentheses we
        open and close our brackets, and then the code we want to execute when
        we call the change color function go in here. So what we want to happen
        when we click our button and run the change color function is change the
        color of our box. So what we do in here is grab our box, access the
        property style we want to access our background and set it to blue. So
        box and then this is getting into, if this were an HTML element, we
        could add a style property to it and set background to blue in it. So
        it&apos;s sort of just, without changing the markup going in and changing
        something about it dynamically. So if we save this and refresh our page,
        I click the button and the box turns blue. So, but you don&apos;t have to
        have the onclick in the JavaScript. What&apos;s cool about Onclick is you can
        set it to this property here so we can set the onclick of our button to
        change me. See, when we&apos;re referencing a function, that&apos;s all you have
        to do the name of the function with the opening and closing parentheses.
        And if we were to set the onclick here, we&apos;d go into our JavaScript, we
        don&apos;t need to set it here and in the HTML. So what I would do is just
        remove the onclick function from the JavaScript because we attached it
        in the HTML and now it should work the same way. Oh, the function is
        called change color. So now it works the same way whether you are
        setting this event in the HTML or in the JavaScript. Okay, so I
        mentioned conditional statements at the beginning. I want to use a
        conditional statement in this changecolor function to check the color of
        the box and then there&apos;ll be a kind of toggle effect. So the anatomy of
        a conditional if else statement is if check this condition, execute this
        code. So if whatever we put in here, do this else do something else. So
        we are checking if box style background equals red. And you&apos;ll notice I
        did two equal signs here. This is a comparison operator that means
        equals. So it&apos;s two as opposed to just one. This would be setting
        something. So we&apos;re checking, not setting, we&apos;re using two. There are
        other comparison operators such as not equal to, the exclamation point
        is a negation symbol. There&apos;s also, you know, greater than, less than,
        greater than or equal to, less than or equal to, and this is identical,
        which is slightly different from equals, but we&apos;re just going to use
        equals for now because we don&apos;t need to worry about identical. So
        this conditional statement is checking if our box background is red, and
        if it is we want to change it to blue. So I&apos;m going to cut what we had
        already written and paste it in here. So if our box background is red,
        change it to blue. Else let&apos;s change it to redem box style background
        equals because we are setting it when we check, we use our comparison
        operator of double equal sign. When we&apos;re setting we just use a single
        okay, so if we save this and refresh if it&apos;s red it changes to blue and
        now it&apos;s blue. If we click it, it should check if it&apos;s red it&apos;s not, so
        it&apos;s going to run the else and change it back to red. There you have it.
        That&apos;s just a really quick overview of the basic tenants of JavaScript.
        You&apos;ve got a little bit of variable knowledge now. You&apos;ve got events and
        functions and even some conditional statements and a couple other terms.
        So hopefully you found this helpful. We&apos;re going to continue getting
        more advanced with this for now, but thanks for watching. I hope you
        found this useful and I will see you all next week. Bye you guys.
      </div>
    </div>
  );
};

export default TestText;
