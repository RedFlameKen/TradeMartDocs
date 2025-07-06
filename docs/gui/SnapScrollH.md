# SnapScrollH

**Package** com.realeyez.trademart.gui.components.scroll

For scrolling through panels of equal sizes wherein when you scroll
horizontally, you want to snap to the next panel, the SnapScrollH panel class
should be used. This behavior is comparable to scrolling through pictures and
videos in instagram and facebook posts. All
you need to do is create an instance of this and provide it a ScrollView to
apply the scroll snapping to.

## Constructors
### SnapScrollH(ScrollView)
```java
public SnapScrollH(ScrollView scrollView)
```
SnapScrollH must be instanciated with this constructor.


## Fields
### scrollView
```java
private ScrollView scrollView;
```
The target ScrollView to apply the snap scrolling on.

### lastY
```java
private int lastX;
```
The last x position before scrolling starts.

### curChild
```java
private int curChild;
```
The index of the currently focused child of the children of the [`scrollView`](#scrollview)'s
child.

## Methods
### snap()
```java
private void snap()
```
The snapping logic of the scroll panel. This is called everytime the
MotionEvent.ACTION_UP action is invoked in the OnTouchListener of the
[`scrollView`](#scrollview).

### applyScrollEvent()
```java
private void applyScrollEvent()
```
Applies the onTouchEvent for the [`scrollView`](#scrollview).

### getCurChild()
```java
public int getCurChild()
```
Get the value of [`curChild`](#curchild).

