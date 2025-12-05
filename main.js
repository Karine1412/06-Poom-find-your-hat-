//ใช้ sync เพื่อให้ terminal รับค่า input
"use strict";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

// Board tiles //สัญลักษณ์ต่างๆของตัวเกม
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board // ตางรางของเกม
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

// Game state // เริ่มเกมที่ตำแหน่งซ้ายบนสุดของตาราง [0][0]
let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
function printBoard(board) {
	console.clear(); // ใช้เพื่อ Clear จอทุกครั้งที่จะแสดงผลใหม่อีกครั้ง
	const rows = board.map(function(row) {
		return row.join(" ");
	});									// จัดเรียงระเบียบตารางทั้งหมด
	const boardNew = rows.join("\n");
	console.log(boardNew)
}

// Game play loop // Loop ทำตารางใหม่ทุกครั้งที่เกมให้เริ่มใหม่
while (playing) {
printBoard(board);
const input = prompt("Which way? (w/a/s/d): ");

board[playerRow][playerCol] = EMPTY; //ใช้ลบตำแหน่งเดิมของผู้เล่น

//จัดทำเงื่อนไขในการขยับในตาราง
if (input === "w") {[
	playerRow = playerRow - 1
]}
else if (input === "s"){[
	playerRow = playerRow + 1
]}
else if (input === "a"){
	playerCol = playerCol - 1;
}
else if (input === "d"){
	playerCol = playerCol + 1;
}
// ถ้าใช้ตัวอักษรมากกว่า 2 ตัวอักษรกับตัวอักษรอื่นจะติด invalid movement ทันที
else { 
	console.log("invalid movement");
	break;
}

//Check the movement to Win // ถ้าสามารถเดินไปถึงหมวกได้เกมจะจบและชนะทันที
if (board[playerRow][playerCol] === HAT) {
	console.log("You Win!");
	break;
}
// Player Movement // การขยับของผู้เล่น
board[playerRow][playerCol] = PLAYER;
	console.log(input);
}