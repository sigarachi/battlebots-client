git pull
npm run build
tmux kill-server
tmux new-session -d -s my-site 'serve -s dist -l 8070'
