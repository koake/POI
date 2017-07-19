#!/usr/bin/env python
#coding=utf-8

import pysvn
import re
import ftplib
import os
import socket
import sys

global g_svnURL
global g_customFolder
global g_finalURL
g_svnURL = ''
g_customFolder = ''
g_finalURL = ''

# FILEPATH = './bin/js/KodPlatform/service/login/LoginDlg.js'
HOST = '172.16.1.101'
DIRN = './'
FILE = './bin/'
UPLOADDIR = './laya/'
USER = 'test_h5'
PASSWORD = 'kod@2011'


def changSVNInfo():
    client = pysvn.Client()
    entry = client.info('.')
    print 'Url:', entry.url
    print 'version: ', entry.commit_revision.number

    try:
        #替换相关的svn显示信息
        # file = open(FILEPATH, 'r+')
        # content = file.read()
        global g_svnURL
        g_svnURL = entry.url
        svnURL = 'this.svnURL.text = "%s";' % entry.url
        svnVersion = 'this.svnVersion.text = "%s";' % entry.commit_revision.number
        # out = re.sub(r'this.svnURL.text = "";', svnURL, content)
        # out = re.sub(r'this.svnVersion.text = "";', svnVersion, out)
        # print(out)
        # open(FILEPATH, 'w').write(out)
        # file.close()
    except:
        print '%s open failed!' % FILEPATH
    finally:
        pass


try:
    ftp = ftplib.FTP(HOST)
except (socket.error, socket.gaierror):
    print 'ERROR:cannot reach " %s"' % HOST
print '***Connected to host "%s"' % HOST


def uploadFile(localpath, remotepath='./'):
    if not os.path.isfile(localpath):
        return
    print '+++ upload %s to %s:%s' % (localpath, HOST, remotepath)
    ftp.storbinary('STOR ' + remotepath, open(localpath, 'rb'))

def makeRemoteDir(remotedir):
    dirs = remotedir.split("/")
    ftpdir = '.'
    for subStr in dirs:
        ftpdir += '/' + subStr
        try:
            ftp.mkd(ftpdir)
        except:
            print 'Make Remotedir[%s] failed!' %ftpdir

def uploadDir(localdir='./', remotedir='./'):
    if not os.path.isdir(localdir):
        return
    try:
        ftp.mkd(remotedir)
    except:
        print 'Make Remotedir failed!'
    ftp.cwd(remotedir)
    for file in os.listdir(localdir):
        src = os.path.join(localdir, file)
        if os.path.isfile(src):
            uploadFile(src, file)
        elif os.path.isdir(src):
            try:
                ftp.mkd(file)
            except:
                print 'MakeDir failed!'

            uploadDir(src, file)
    ftp.cwd('..')


def ftpUpload():

    try:
        ftp.login(USER, PASSWORD)
    except ftplib.error_perm:
        print 'ERROR: cannot login anonymously'
        ftp.quit()
        return
    print '*** Logged in as "%s"' % USER
    try:
        ftp.cwd(DIRN)
    except ftplib.error_perm:
        print 'ERRORL cannot CD to "%s"' % DIRN
        ftp.quit()
        return
    print '*** Changed to "%s" folder' % DIRN
    try:
        #传一个回调函数给retrbinary() 它在每接收一个二进制数据时都会被调用
        # ftp.retrbinary('RETR %s' % FILE, open(FILE, 'wb').write)
        # 以svn路径的最后一个文件夹来标记ftp的对应路径
        global g_customFolder
        global g_svnURL
        global g_finalURL
        if g_customFolder == '':
            svnSplitPath = g_svnURL.split("/")
            svnPath = ''
            addition = False;
            for subStr in svnSplitPath:
                if subStr == 'branches' or subStr == 'tags' or subStr == 'trunks':
                    addition = True
                if addition:
                    svnPath = svnPath + '/' + subStr
            ftpPath = '%s%s' % (UPLOADDIR, svnPath)
            g_finalURL = '%s/laya%s/index.html' %(HOST, svnPath)
        else:
            ftpPath = '%s%s' % (UPLOADDIR, g_customFolder)
            g_finalURL = '%s/laya%s/index.html' %(HOST, g_customFolder)
        makeRemoteDir(ftpPath)
        uploadDir(FILE, ftpPath)
    except ftplib.error_perm:
        print 'ERROR: uploadDir failed "%s"' % FILE
        os.unlink(FILE)
    else:
        print '=====[SUCCESS, ALL FILE UPDATE !] ====='
        print g_finalURL
    ftp.quit()
    return


if len(sys.argv) > 1:
    g_customFolder = sys.argv[1]
print "SVN CustomPath:", g_customFolder

# 编译最新的ts
os.system('tsc -p . --outDir bin/js')
# 添加当前的svn相关信息
changSVNInfo()
# 上传到ftp
ftpUpload()

raw_input()