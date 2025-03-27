const express = require("express");
const router = express.Router();
const Chat = require("../models/chat");
const ExpressError = require("../utils/ExpressError");

// Async wrapper for error handling
function asyncWrap(fn) {
    return function (req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

// Get all chats
router.get("/", asyncWrap(async (req, res) => {
    const chats = await Chat.find();
    res.render("chathub/index", { chats });
}));

// Render new chat form
router.get("/new", (req, res) => {
    res.render("chathub/new");
});

// Render edit form for a specific chat
router.get("/:id/edit", asyncWrap(async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    if (!chat) throw new ExpressError("Chat not found", 404);
    res.render("chathub/edit", { chat });
}));

// Get a specific chat
router.get("/:id", asyncWrap(async (req, res, next) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    if (!chat) throw new ExpressError("Chat not found", 404);
    res.render("chathub/edit", { chat });
}));

// Create a new chat
router.post("/", asyncWrap(async (req, res) => {
    const { from, to, msg } = req.body;
    const newChat = new Chat({
        from,
        to,
        msg,
        created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chathub");
}));

// Update an existing chat
router.put("/:id", asyncWrap(async (req, res) => {
    const { id } = req.params;
    const { msg: newMsg } = req.body;
    const updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );
    if (!updatedChat) throw new ExpressError("Chat not found", 404);
    res.redirect("/chathub");
}));

// Delete a chat
router.delete("/:id", asyncWrap(async (req, res) => {
    const { id } = req.params;
    const deletedChat = await Chat.findByIdAndDelete(id);
    if (!deletedChat) throw new ExpressError("Chat not found", 404);
    res.redirect("/chathub");
}));

module.exports = router;
