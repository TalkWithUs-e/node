module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('New client connected');

        // 클라이언트로부터 메시지 수신
        socket.on('chatMessage', (msg) => {
            console.log(`Received message: ${msg}`);
            // 모든 클라이언트에게 메시지 전송
            io.emit('chatMessage', `${msg}`);
        });

        // 클라이언트 연결 종료 처리
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });

        // 클라이언트에 초기 메시지 전송
        socket.emit('chatMessage', 'Welcome to the chat room!');
    });
};
