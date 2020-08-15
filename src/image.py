# import cv2
# import numpy as np
# import math
# import time
# import json
# import webbrowser
# from flask import Flask,jsonify
#
# app = Flask(__name__)
#
# @app.route('/api', methods=["GET"])
# def get_current_time():
#     return json.dumps({'time':time.time()});
#
# if __name__=='__main__':
#     app.run(port=3006,debug=True,host='0.0.0.0')
#
# cap = cv2.VideoCapture(0)
# l=m=n=p=0
# r=t=u=o=0
# print ("action to be performed")
# print ("\n2. gmail\n3. workday \n4. logilife\n5. jira")
# print (" ")
# while(cap.isOpened()):
#
#
#     ret, img = cap.read()
#
#
#     cv2.rectangle(img, (300,300), (100,100), (0,255,0),0)
#     crop_img = img[100:300, 100:300]
#
#     grey = cv2.cvtColor(crop_img, cv2.COLOR_BGR2GRAY)
#
#
#     value = (35, 35)
#     blurred = cv2.GaussianBlur(grey, value, 0)
#
#
#     _, thresh1 = cv2.threshold(blurred, 127, 255,
#                                cv2.THRESH_BINARY_INV+cv2.THRESH_OTSU)
#
#
#     cv2.imshow('Thresholded', thresh1)
#
#
# #     (version, , _) = cv2.version_.split('.')
#     (major, minor, _) = cv2.__version__.split(".")
#     if major == '3':
#         image, contours, hierarchy = cv2.findContours(thresh1.copy(), \
#                cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)
#     elif major == '2':
#         contours, hierarchy = cv2.findContours(thresh1.copy(),cv2.RETR_TREE, \
#                cv2.CHAIN_APPROX_NONE)
#
#
#     cnt = max(contours, key = lambda x: cv2.contourArea(x))
#
#
#     x, y, w, h = cv2.boundingRect(cnt)
#     cv2.rectangle(crop_img, (x, y), (x+w, y+h), (0, 0, 255), 0)
#
#
#     hull = cv2.convexHull(cnt)
#
#
#     drawing = np.zeros(crop_img.shape,np.uint8)
#     cv2.drawContours(drawing, [cnt], 0, (0, 255, 0), 0)
#     cv2.drawContours(drawing, [hull], 0,(0, 0, 255), 0)
#
#
#     hull = cv2.convexHull(cnt, returnPoints=False)
#
#
#     defects = cv2.convexityDefects(cnt, hull)
#     count_defects = 0
#     cv2.drawContours(thresh1, contours, -1, (0, 255, 0), 3)
#
#
#     for i in range(defects.shape[0]):
#         s,e,f,d = defects[i,0]
#
#         start = tuple(cnt[s][0])
#         end = tuple(cnt[e][0])
#         far = tuple(cnt[f][0])
#
# #         a = math.sqrt((end[0] - start[0])*2 + (end[1] - start[1])*2)
# #         b = math.sqrt((far[0] - start[0])*2 + (far[1] - start[1])*2)
# #         c = math.sqrt((end[0] - far[0])*2 + (end[1] - far[1])*2)
#
#
#         angle = 0.3 * 57
#
#
#         if angle <= 90:
#             count_defects += 1
#             cv2.circle(crop_img, far, 1, [0,0,255], -1)
#         #dist = cv2.pointPolygonTest(cnt,far,True)
#
#
#         cv2.line(crop_img,start, end, [0,255,0], 2)
#         #cv2.circle(crop_img,far,5,[0,0,255],-1)
#
#
#     if count_defects == 1:
#         cv2.putText(img," 2 is detected", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, 2)
#     elif count_defects == 2:
#         str = "3 is detected"
#         cv2.putText(img, str, (5, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, 2)
#     elif count_defects == 3:
#         cv2.putText(img,"4 is detected", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, 2)
#     elif count_defects == 4:
#         cv2.putText(img,"5 is detected !!!", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, 2)
#     else:
#         cv2.putText(img," ", (50, 50),\
#                     cv2.FONT_HERSHEY_SIMPLEX, 2, 2)
#
#
#     cv2.imshow('Gesture', img)
#     #all_img = np.hstack((drawing, crop_img))
#     #cv2.imshow('Contours', all_img)
#
# #     start = time.clock()
#
#     for i in range(0,1000):
#          pass
#          for j in range(0,1000):
#               pass
#
# #          stop = time.clock()
# #     stop = time.clock()
#
#     #if count_defects!=0:
#         # print " %d fingers are recognised" % (count_defects+1)
#
#
#
# #2
#     if count_defects  == 1:
#         u=count_defects+1
#         l=l+1
#        # print "%d number =1= " % (l)
#         if l > 25:
#           print ("%d fingers are recognised " % (u))
#           import webbrowser
#           webbrowser.open("https://mail.google.com/mail/u/0/#inbox")
#   # 4
#           break
#     elif count_defects == 3:
#          t=count_defects+1
#          n=n+1
#          #print "%d number =3=" % (n)
#          if n > 15:
#            print ("%d fingers are recognised " % (t))
#
#            import webbrowser
#            webbrowser.open("https://wd5.myworkday.com/logitech/d/home.htmld")
#      #5
#            break
#     elif count_defects == 5:
#         o=count_defects+1
#         p=p+1
#         # print "%d number=2= " % (m)
#         if p > 5:
#            print ("%d finger are recognised " % (o))
#            import webbrowser
#
#            webbrowser.open("https://www.logitech.com/en-in")
#
#            break
#     #3
#     if count_defects  == 2:
#          r=count_defects+1
#          m=m+1
#         # print "%d number=2= " % (m)
#          if m > 10:
#            print ("%d fingers are recognised" % (r))
#            import webbrowser
#            webbrowser.open("https://jira.logitech.io/secure/Dashboard.jspa")
#            break
#
#
#     k = cv2.waitKey(10)
#     if k == 27:
#         break
#     elif cv2.waitKey(1) == ord('q'):
#         break
#
# cap.release()
# cv2.destroyAllWindows()
